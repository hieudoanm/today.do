import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import { schema as countriesSchema } from './countries/countries.schema';
import { schema as healthSchema } from './health/health.schema';
import { schema as tasksSchema } from './tasks/tasks.schema';

const schemas: GraphQLSchema[] = [countriesSchema, healthSchema, tasksSchema];
export const schema = mergeSchemas({ schemas });
