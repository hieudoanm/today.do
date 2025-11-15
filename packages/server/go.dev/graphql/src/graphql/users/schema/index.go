package users_schema

import "github.com/graphql-go/graphql"

var User = graphql.NewObject(graphql.ObjectConfig{
	Name: "User",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Name: "id",
			Type: graphql.String,
		},
		"username": &graphql.Field{
			Name: "username",
			Type: graphql.String,
		},
	},
})
