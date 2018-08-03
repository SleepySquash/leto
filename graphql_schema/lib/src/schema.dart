library graphql_schema.src.schema;

import 'dart:async';
import 'package:meta/meta.dart';
part 'argument.dart';
part 'field.dart';
part 'gen.dart';
part 'object_type.dart';
part 'scalar.dart';
part 'type.dart';
part 'validation_result.dart';

class GraphQLSchema {
  final GraphQLObjectType query;
  final GraphQLObjectType mutation;
  final GraphQLObjectType subscription;

  GraphQLSchema({this.query, this.mutation, this.subscription});
}

GraphQLSchema graphQLSchema(
        {@required GraphQLObjectType query, GraphQLObjectType mutation, GraphQLObjectType subscription}) =>
    new GraphQLSchema(query: query, mutation: mutation, subscription: subscription);

/// A default resolver that always returns `null`.
resolveToNull(_, __) => null;

class GraphQLException extends FormatException {
  GraphQLException(String message) : super(message);

  @override
  String toString() => 'GraphQL exception: $message';
}
