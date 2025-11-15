import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Country = {
  __typename?: 'Country';
  altSpellings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  area?: Maybe<Scalars['Float']['output']>;
  borders?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  capital?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cca2?: Maybe<Scalars['String']['output']>;
  cca3?: Maybe<Scalars['String']['output']>;
  ccn3?: Maybe<Scalars['String']['output']>;
  cioc?: Maybe<Scalars['String']['output']>;
  continents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fifa?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  independent?: Maybe<Scalars['Boolean']['output']>;
  landlocked?: Maybe<Scalars['Boolean']['output']>;
  latlng?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  name?: Maybe<Name>;
  population?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  startOfWeek?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subregion?: Maybe<Scalars['String']['output']>;
  timezones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tld?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  unMember?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  taskActions: TaskActions;
};

export type Name = {
  __typename?: 'Name';
  common?: Maybe<Scalars['String']['output']>;
  official?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  countries?: Maybe<Array<Maybe<Country>>>;
  country?: Maybe<Country>;
  health?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type QueryCountryArgs = {
  cca3: Scalars['String']['input'];
};

export type QueryTaskArgs = {
  id: Scalars['Int']['input'];
};

export type Task = {
  __typename?: 'Task';
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type TaskActions = {
  __typename?: 'TaskActions';
  add: Task;
  delete: Task;
  update: Task;
};

export type TaskActionsAddArgs = {
  taskInput: TaskInput;
};

export type TaskActionsDeleteArgs = {
  taskId: Scalars['Int']['input'];
};

export type TaskActionsUpdateArgs = {
  taskId: Scalars['Int']['input'];
  taskInput: TaskInput;
};

export type TaskInput = {
  completed: Scalars['Boolean']['input'];
  listId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
  TResult,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<
  TTypes,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<
  T = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = Record<PropertyKey, never>,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Country: ResolverTypeWrapper<Country>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Name: ResolverTypeWrapper<Name>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Task: ResolverTypeWrapper<Task>;
  TaskActions: ResolverTypeWrapper<TaskActions>;
  TaskInput: TaskInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Country: Country;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Mutation: Record<PropertyKey, never>;
  Name: Name;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  Task: Task;
  TaskActions: TaskActions;
  TaskInput: TaskInput;
};

export type CountryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Country'] = ResolversParentTypes['Country'],
> = {
  altSpellings?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  area?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  borders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  capital?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  cca2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cca3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccn3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cioc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  continents?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  fifa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  independent?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  landlocked?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  latlng?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Float']>>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['Name']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startOfWeek?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subregion?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  timezones?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  tld?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  unMember?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  taskActions?: Resolver<
    ResolversTypes['TaskActions'],
    ParentType,
    ContextType
  >;
};

export type NameResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Name'] = ResolversParentTypes['Name'],
> = {
  common?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  official?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  countries?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Country']>>>,
    ParentType,
    ContextType
  >;
  country?: Resolver<
    Maybe<ResolversTypes['Country']>,
    ParentType,
    ContextType,
    RequireFields<QueryCountryArgs, 'cca3'>
  >;
  health?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  task?: Resolver<
    Maybe<ResolversTypes['Task']>,
    ParentType,
    ContextType,
    RequireFields<QueryTaskArgs, 'id'>
  >;
  tasks?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Task']>>>,
    ParentType,
    ContextType
  >;
};

export type TaskResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Task'] = ResolversParentTypes['Task'],
> = {
  completed?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
};

export type TaskActionsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TaskActions'] = ResolversParentTypes['TaskActions'],
> = {
  add?: Resolver<
    ResolversTypes['Task'],
    ParentType,
    ContextType,
    RequireFields<TaskActionsAddArgs, 'taskInput'>
  >;
  delete?: Resolver<
    ResolversTypes['Task'],
    ParentType,
    ContextType,
    RequireFields<TaskActionsDeleteArgs, 'taskId'>
  >;
  update?: Resolver<
    ResolversTypes['Task'],
    ParentType,
    ContextType,
    RequireFields<TaskActionsUpdateArgs, 'taskId' | 'taskInput'>
  >;
};

export type Resolvers<ContextType = any> = {
  Country?: CountryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Name?: NameResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskActions?: TaskActionsResolvers<ContextType>;
};
