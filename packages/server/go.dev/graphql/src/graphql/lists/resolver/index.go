package lists_resolver

import (
	lists_service "graphql-starter/src/graphql/lists/service"

	"github.com/graphql-go/graphql"
)

func GetLists(params graphql.ResolveParams) (interface{}, error) {
	lists, listsError := lists_service.GetLists()
	return lists, listsError
}

func GetList(params graphql.ResolveParams) (interface{}, error) {
	list, listError := lists_service.GetList(params.Args["id"].(string))
	return list, listError
}
