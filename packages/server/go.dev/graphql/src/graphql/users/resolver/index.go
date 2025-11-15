package users_resolver

import (
	users_service "graphql-starter/src/graphql/users/service"

	"github.com/graphql-go/graphql"
)

func GetUsers(params graphql.ResolveParams) (interface{}, error) {
	users, usersError := users_service.GetUsers()
	return users, usersError
}

func GetUser(params graphql.ResolveParams) (interface{}, error) {
	user, userError := users_service.GetUser(params.Args["id"].(string))
	return user, userError
}
