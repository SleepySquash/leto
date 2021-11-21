import 'dart:async';

import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/type.dart';
import 'package:build/build.dart';
import 'package:code_builder/code_builder.dart';
import 'package:leto_generator/config.dart';
import 'package:leto_generator/utils.dart';
import 'package:leto_schema/leto_schema.dart';
import 'package:recase/recase.dart';
import 'package:source_gen/source_gen.dart';
import 'package:valida/valida.dart';

/// Generates GraphQL schemas, statically.
Builder graphQLResolverBuilder(BuilderOptions options) {
  return SharedPartBuilder(
    [_GraphQLGenerator(Config.fromJson(options.config))],
    'graphql_resolvers',
  );
}

const _validateTypeChecker = TypeChecker.fromRuntime(Valida);
const _validationTypeChecker = TypeChecker.fromRuntime(Validation);

bool isReqCtx(DartType type) =>
    const TypeChecker.fromRuntime(Ctx).isAssignableFromType(type);

class _GraphQLGenerator extends GeneratorForAnnotation<GraphQLResolver> {
  final Config config;

  _GraphQLGenerator(this.config);

  @override
  Future<String> generateForAnnotatedElement(
    Element element,
    ConstantReader annotation,
    BuildStep buildStep,
  ) async {
    if (element is! FunctionElement) {
      throw UnsupportedError(
          '@GraphQLResolver() is only supported on functions.');
    }
    try {
      final _dartEmitter = DartEmitter();
      final ctx = GeneratorCtx(buildStep: buildStep, config: config);

      final inputs = await inputsFromElement(ctx, element);

      final desc = getDescription(element, element.documentationComment);

      final lib = Library((b) {
        final deprecationReason = getDeprecationReason(element);

        final _retType = genericTypeWhenFutureOrStream(element.returnType) ??
            element.returnType;

        final _returnType = getReturnType(_retType);
        final returnType = _returnType.endsWith('?')
            ? _returnType.substring(0, _returnType.length - 1)
            : _returnType;

        final resolverName = const TypeChecker.fromRuntime(GraphQLResolver)
            .firstAnnotationOf(element)
            ?.getField('name')
            ?.toStringValue();
        final genericTypeName = const TypeChecker.fromRuntime(GraphQLResolver)
            .firstAnnotationOf(element)
            ?.getField('genericTypeName')
            ?.toStringValue();

        final returnGqlType = inferType(
          config.customTypes,
          element,
          element.name,
          element.returnType,
          genericTypeName: genericTypeName,
        ).accept(_dartEmitter).toString();

        final funcDef = resolverFunctionFromElement(element);

        b.body.add(
          Field(
            (f) => f
              ..assignment = Code(
                '''
                field(
                  '${resolverName ?? element.name}', 
                  $returnGqlType,
                  ${desc == null ? '' : 'description: r"$desc",'}
                  $funcDef,
                  ${inputs.isEmpty ? '' : 'inputs: [${inputs.join(',')}],'}
                  ${deprecationReason == null ? '' : 'deprecationReason: r"$deprecationReason",'}
                  )
                 ''',
              )
              ..name = '${element.name}$graphQLFieldSuffix'
              ..type = refer(
                'GraphQLObjectField<$returnType, Object, Object>',
              )
              ..modifier = FieldModifier.final$,
          ),
        );
      });
      return lib.accept(_dartEmitter).toString();
    } catch (e, s) {
      print('$e $s');

      return '/*$e $s*/';
    }
  }
}

Future<List<String>> inputsFromElement(
  GeneratorCtx ctx,
  ExecutableElement element,
) async {
  final _dartEmitter = DartEmitter();
  final inputMaybe = await Future.wait(element.parameters.map((e) async {
    if (isReqCtx(e.type)) {
      return null;
    } else {
      final argInfo = argInfoFromElement(e);
      final type = inferType(
        ctx.config.customTypes,
        e,
        e.name,
        e.type,
        nullable: argInfo.inline,
      ).accept(_dartEmitter);

      if (argInfo.inline) {
        // TODO; Check e.type is InputType?
        return '...$type.fields';
      } else {
        final defaultValueCode = e.defaultValueCode ??
            argInfo.defaultCode ??
            argInfo.defaultFunc?.call() as String?;
        final defaultValue =
            defaultValueCode != null ? 'defaultValue: $defaultValueCode,' : '';

        final isInput = e.type.element != null && isInputType(e.type.element!);

        final docs = await documentationOfParameter(e, ctx.buildStep);
        return '$type${isInput ? '' : '.coerceToInputObject()'}.inputField('
            ' "${e.name}",'
            ' $defaultValue${docs.isEmpty ? '' : 'description: r"$docs",'})';
      }
    }
  }));
  return inputMaybe.whereType<String>().toList();
}

GraphQLArg argInfoFromElement(Element element) {
  final argAnnot =
      const TypeChecker.fromRuntime(GraphQLArg).firstAnnotationOfExact(element);
  final defaultFunc = argAnnot?.getField('defaultFunc')?.toFunctionValue();
  final argInfo = GraphQLArg(
    inline: argAnnot?.getField('inline')?.toBoolValue() ?? false,
    defaultCode: argAnnot?.getField('defaultCode')?.toStringValue(),
    defaultFunc: defaultFunc == null ? null : () => '${defaultFunc.name}()',
  );
  if (defaultFunc != null && argInfo.defaultCode != null) {
    throw Exception(
      "Can't specify both defaultFunc: $defaultFunc and"
      ' defaultCode: ${argInfo.defaultCode} in decorator GraphQLArg'
      ' for ${element.name}.',
    );
  }
  return argInfo;
}

String resolverFunctionBodyFromElement(ExecutableElement element) {
  bool _hasValidation(Element? element) =>
      element != null && _validateTypeChecker.hasAnnotationOfExact(element);
  bool _isValidation(Element? element) =>
      element != null && _validationTypeChecker.isAssignableFrom(element);

  final validationsInParams = <ParameterElement>[];
  final validations = <String>[];
  final params = <String>[];
  for (final e in element.parameters) {
    if (isReqCtx(e.type)) {
      const value = 'ctx';
      params.add(e.isPositional ? value : '${e.name}:$value');
    } else {
      final type = e.type.getDisplayString(withNullability: true);
      final typeName = e.type.getDisplayString(withNullability: false);
      final argInfo = argInfoFromElement(e);
      final value =
          argInfo.inline ? '${e.name}Arg' : '(args["${e.name}"] as $type)';
      if (argInfo.inline) {
        // TODO: support generics
        validations.add(
          'final $value = '
          '${ReCase(typeName).camelCase}$serializerSuffix'
          '.fromJson(ctx.baseCtx.schema.serdeCtx, args);',
        );
      }
      if (_isValidation(e.type.element)) {
        // TODO: pass validation resot in param (don't throw on validation errorπ)
        validationsInParams.add(e);
      }

      params.add(e.isPositional ? value : '${e.name}:$value');
      final hasValidation = _hasValidation(e.type.element);
      if (hasValidation) {
        final resultName = '${e.name}ValidationResult';

        validations.add('''
if ($value != null) {
  final $resultName = validate$typeName($value as $typeName);
  if ($resultName.hasErrors) {
    throw $resultName;
  }
}
''');
      }
    }
  }

  return '''
final args = ctx.args;
${validations.join('\n')}
return ${element is MethodElement ? 'obj.' : ''}${element.name}(${params.join(',')});
''';
}

String resolverFunctionFromElement(ExecutableElement element) {
  final hasSubsAnnot =
      const TypeChecker.fromRuntime(Subscription).hasAnnotationOfExact(element);
  final isStream = isStreamOrAsyncStream(element.returnType);

  if (hasSubsAnnot && !isStream || isStream && !hasSubsAnnot) {
    print('$element should return a stream to be a Subscription.');
  }

  final body = resolverFunctionBodyFromElement(element);
  return '''
${isStream ? 'subscribe' : 'resolve'}: (obj, ctx) {
  $body
}
''';
}
