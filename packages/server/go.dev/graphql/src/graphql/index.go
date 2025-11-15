package schema

import (
	"github.com/graphql-go/graphql"

	lists_resolver "graphql-starter/src/graphql/lists/resolver"
	lists_schema "graphql-starter/src/graphql/lists/schema"
	tasks_resolver "graphql-starter/src/graphql/tasks/resolver"
	tasks_schema "graphql-starter/src/graphql/tasks/schema"
	users_resolver "graphql-starter/src/graphql/users/resolver"
	users_schema "graphql-starter/src/graphql/users/schema"
)

func CreateGraphQlSchema() (graphql.Schema, error) {
	queryType := graphql.NewObject(graphql.ObjectConfig{
		Name: "Query",
		Fields: graphql.Fields{
			"tasks": &graphql.Field{
				Name:    "tasks",
				Type:    graphql.NewList(tasks_schema.Task),
				Resolve: tasks_resolver.GetTasks,
			},
			"task": &graphql.Field{
				Name: "task",
				Type: tasks_schema.Task,
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: tasks_resolver.GetTask,
			},
			"lists": &graphql.Field{
				Name:    "lists",
				Type:    graphql.NewList(lists_schema.List),
				Resolve: lists_resolver.GetLists,
			},
			"list": &graphql.Field{
				Name: "list",
				Type: lists_schema.List,
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: lists_resolver.GetList,
			},
			"users": &graphql.Field{
				Name:    "users",
				Type:    graphql.NewList(users_schema.User),
				Resolve: users_resolver.GetUsers,
			},
			"user": &graphql.Field{
				Name: "user",
				Type: users_schema.User,
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: users_resolver.GetUser,
			},
		},
	})

	// above schema definition code
	return graphql.NewSchema(graphql.SchemaConfig{
		Query: queryType,
	})
}
