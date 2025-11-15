package lists_service

import (
	"encoding/json"
	"fmt"
	"graphql-starter/src/libs/http"
	"graphql-starter/src/utils"
	"log"
	"time"
)

var API = utils.Getenv("API", "http://localhost:8080")

type List struct {
	ID          string    `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	UserId      string    `json:"userId"`
	Createdat   time.Time `json:"createdAt"`
	Updatedat   time.Time `json:"updatedAt"`
}

func GetLists() ([]List, error) {
	var url = fmt.Sprintf("%s/lists", API)
	body, httpGetError := http.Get(url)
	if httpGetError != nil {
		log.Println("Fail to GetLists")
		return nil, httpGetError
	}
	// Parse JSON
	var lists []List
	jsonUnmarshalError := json.Unmarshal(body, &lists)
	if jsonUnmarshalError != nil {
		log.Println("Fail to GetLists")
		return nil, jsonUnmarshalError
	}

	return lists, nil
}

func GetList(id string) (List, error) {
	var url = fmt.Sprintf("%s/lists/%s", API, id)
	body, httpGetError := http.Get(url)
	if httpGetError != nil {
		log.Println("Fail to GetLists")
		return List{}, httpGetError
	}
	// Parse JSON
	var list List
	jsonUnmarshalError := json.Unmarshal(body, &list)
	if jsonUnmarshalError != nil {
		log.Println("Fail to GetLists")
		return List{}, jsonUnmarshalError
	}

	return list, nil
}
