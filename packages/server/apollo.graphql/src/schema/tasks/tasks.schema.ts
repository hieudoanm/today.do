import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './tasks.resolver';
import typeDefs from './tasks.graphql';

export const schema = makeExecutableSchema({ typeDefs, resolvers });
