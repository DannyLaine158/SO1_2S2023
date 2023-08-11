FROM golang

WORKDIR /back_container

COPY . .

RUN go mod download

EXPOSE 8000

CMD ["go", "run", "Main.go"]