package utils

import "os"

func Getenv(key string, defaultValue string) string {
	var value string = os.Getenv(key)
	if defaultValue == "" {
		return value
	}
	if defaultValue != "" && value == "" {
		return defaultValue
	}
	return value
}
