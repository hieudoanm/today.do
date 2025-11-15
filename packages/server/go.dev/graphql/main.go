package main

import (
	"log"
	"net/http"

	"github.com/graphql-go/handler"

	graphql "graphql-starter/src/graphql"
)

func main() {
	graphQlSchema, graphQlSchemaError := graphql.CreateGraphQlSchema()
	if graphQlSchemaError != nil {
		log.Fatal(graphQlSchemaError)
	}

	graphQlHandler := handler.New(&handler.Config{
		Schema:     &graphQlSchema,
		Pretty:     true,
		GraphiQL:   false,
		Playground: true,
	})

	var PORT = "5000"
	log.Printf("🚀 Server is listening on http://localhost:%s/graphql", PORT)
	http.Handle("/graphql", graphQlHandler)
	log.Fatal(http.ListenAndServe(":"+PORT, nil))
}
