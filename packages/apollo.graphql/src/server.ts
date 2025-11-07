import { ApolloServer, ApolloServerPlugin } from '@apollo/server';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { startStandaloneServer } from '@apollo/server/standalone';
import { GraphQLSchema } from 'graphql';
import { CountriesDataSource } from './schema/countries/countries.data-source';
import { schema } from './schema/schema';
import { logger } from './utils/log';

export const PORT: string = process.env.PORT ?? '5000';
export const NODE_ENV: string = process.env.NODE_ENV ?? 'development';

const startServer = async ({ schema }: { schema: GraphQLSchema }) => {
  const landingPage: ApolloServerPlugin =
    NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false });

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [landingPage],
  });

  const port: number = Number.parseInt(PORT, 10);
  const { url } = await startStandaloneServer(server, {
    listen: { port },
    async context() {
      return {
        countriesDataSource: new CountriesDataSource(),
      };
    },
  });

  logger.info(`🚀 Apollo Server is ready at ${url}`);
};

startServer({ schema }).catch(logger.error);
