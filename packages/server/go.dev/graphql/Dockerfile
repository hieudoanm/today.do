FROM golang:1.25.4

LABEL maintainer="hieumdoan@gmail.com"
LABEL version="1.0"
LABEL description="GraphQL - HTTP"

WORKDIR /app

COPY . .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o ./dist/main

ENTRYPOINT ["./dist/main"]
