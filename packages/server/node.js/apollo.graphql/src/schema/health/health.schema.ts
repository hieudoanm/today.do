import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './health.resolver';
import typeDefs from './health.graphql';

export const schema = makeExecutableSchema({ typeDefs, resolvers });
