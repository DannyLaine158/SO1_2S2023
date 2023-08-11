package main

import (
	"ejemploClase3/Config"
	"ejemploClase3/Entities"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {
	app := fiber.New()
	err := Config.Connect()
	if err != nil {
		log.Fatalln("Error ", err)
	}

	insertData("Eddy")

	err = app.Listen(":8000")
	if err != nil {
		log.Fatal("Error ", err)
	}
}

func insertData(name string) {
	user := Entities.User{Nombre: name}
	Config.Database.Create(&user)
	fmt.Println(user)
}
