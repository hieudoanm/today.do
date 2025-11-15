package lists_schema

import "github.com/graphql-go/graphql"

var List = graphql.NewObject(graphql.ObjectConfig{
	Name: "List",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Name: "id",
			Type: graphql.String,
		},
		"title": &graphql.Field{
			Name: "title",
			Type: graphql.String,
		},
		"description": &graphql.Field{
			Name: "description",
			Type: graphql.String,
		},
		"userId": &graphql.Field{
			Name: "userId",
			Type: graphql.String,
		},
	},
})
