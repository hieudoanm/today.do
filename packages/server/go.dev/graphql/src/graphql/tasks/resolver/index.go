package tasks_resolver

import (
	tasks_service "graphql-starter/src/graphql/tasks/service"

	"github.com/graphql-go/graphql"
)

func GetTasks(params graphql.ResolveParams) (interface{}, error) {
	tasks, tasksError := tasks_service.GetTasks()
	return tasks, tasksError
}

func GetTask(params graphql.ResolveParams) (interface{}, error) {
	task, taskError := tasks_service.GetTask(params.Args["id"].(string))
	return task, taskError
}
