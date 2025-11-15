package utils

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func Config(name string) error {
	if name == "" {
		name = ".env"
	}

	file, osOpenError := os.Open(name)
	if osOpenError != nil {
		return osOpenError
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		var line string = scanner.Text()
		if line == "" {
			continue
		}
		var keyValue []string = strings.Split(line, "=")
		if len(keyValue) < 2 {
			continue
		}
		var key = keyValue[0]
		var length int = len(keyValue)
		var values []string = keyValue[1:length]
		var value string = strings.Join(values, "")
		fmt.Printf("%s = %s\n", key, value)
		os.Setenv(key, value)
	}

	if scannerError := scanner.Err(); scannerError != nil {
		return scannerError
	}

	return nil
}

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
