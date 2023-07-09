import '../rules_prelude.dart';

const _possibleFragmentSpreadsSpec = ErrorSpec(
  spec: 'https://spec.graphql.org/draft/#sec-Fragment-spread-is-possible',
  code: 'possibleFragmentSpreads',
);

/// Possible fragment spread
///
/// A fragment spread is only valid if the type condition could ever possibly
/// be true: if there is a non-empty intersection of the possible parent types,
/// and possible types which pass the type condition.
///
/// See https://spec.graphql.org/draft/#sec-Fragment-spread-is-possible
Visitor possibleFragmentSpreadsRule(
  ValidationCtx context,
) {
  final visitor = TypedVisitor();
  final typeInfo = context.typeInfo;
  visitor.add<InlineFragmentNode>((node) {
    final fragType = typeInfo.getType();
    final parentType = typeInfo.getParentType();
    if (fragType is GraphQLCompositeType &&
        parentType is GraphQLCompositeType &&
        !doTypesOverlap(context.schema, fragType, parentType)) {
      final parentTypeStr = inspect(parentType);
      final fragTypeStr = inspect(fragType);
      context.reportError(
        GraphQLError(
          'Fragment cannot be spread here as objects of type "${parentTypeStr}"'
          ' can never be of type "${fragTypeStr}".',
          locations: GraphQLErrorLocation.firstFromNodes([
            node,
            node.typeCondition,
            node.selectionSet,
            node.selectionSet.selections.first,
          ]),
          extensions: _possibleFragmentSpreadsSpec.extensions(),
        ),
      );
    }
    return null;
  });
  visitor.add<FragmentSpreadNode>((node) {
    final fragName = node.name.value;
    final fragType = _getFragmentType(context, fragName);
    final parentType = typeInfo.getParentType();
    if (fragType != null &&
        parentType != null &&
        !doTypesOverlap(context.schema, fragType, parentType)) {
      final parentTypeStr = inspect(parentType);
      final fragTypeStr = inspect(fragType);
      context.reportError(
        GraphQLError(
          'Fragment "${fragName}" cannot be spread here as objects of type'
          ' "${parentTypeStr}" can never be of type "${fragTypeStr}".',
          locations: GraphQLErrorLocation.firstFromNodes([node, node.name]),
          extensions: _possibleFragmentSpreadsSpec.extensions(),
        ),
      );
    }
    return null;
  });
  return visitor;
}

GraphQLCompositeType? _getFragmentType(
  ValidationCtx context,
  String name,
) {
  final frag = context.fragmentsMap[name];
  if (frag != null) {
    final type = convertTypeOrNull(
      frag.typeCondition.on,
      context.schema.typeMap,
    );
    if (type is GraphQLCompositeType) {
      return type;
    }
  }
  return null;
}
