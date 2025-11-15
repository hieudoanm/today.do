import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './countries.resolver';
import typeDefs from './countries.graphql';

export const schema = makeExecutableSchema({ typeDefs, resolvers });
