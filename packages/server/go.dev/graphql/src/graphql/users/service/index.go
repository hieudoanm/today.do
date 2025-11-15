package users_service

import (
	"encoding/json"
	"fmt"
	"graphql-starter/src/libs/http"
	"graphql-starter/src/utils"
	"log"
	"time"
)

var API = utils.Getenv("API", "http://localhost:8080")

type User struct {
	ID        string    `json:"id"`
	Username  string    `json:"username"`
	Createdat time.Time `json:"createdAt"`
	Updatedat time.Time `json:"updatedAt"`
}

func GetUsers() ([]User, error) {
	var url = fmt.Sprintf("%s/users", API)
	body, httpGetError := http.Get(url)
	if httpGetError != nil {
		log.Println("Fail to GetUsers")
		return nil, httpGetError
	}
	// Parse JSON
	var users []User
	jsonUnmarshalError := json.Unmarshal(body, &users)
	if jsonUnmarshalError != nil {
		log.Println("Fail to GetUsers")
		return nil, jsonUnmarshalError
	}

	return users, nil
}

func GetUser(id string) (User, error) {
	var url = fmt.Sprintf("%s/users/%s", API, id)
	body, httpGetError := http.Get(url)
	if httpGetError != nil {
		log.Println("Fail to GetUsers")
		return User{}, httpGetError
	}
	// Parse JSON
	var user User
	jsonUnmarshalError := json.Unmarshal(body, &user)
	if jsonUnmarshalError != nil {
		log.Println("Fail to GetUsers")
		return User{}, jsonUnmarshalError
	}

	return user, nil
}
