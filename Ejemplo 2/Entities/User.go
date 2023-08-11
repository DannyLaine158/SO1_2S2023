package Entities

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Nombre string
}
