package raindrops

import "fmt"

func Convert(number int) string {
	if number % 3 != 0 && number % 5 != 0 && number % 7 != 0 {
		return fmt.Sprint(number)
	}

	value := ""

	if number % 3 == 0 {
		value += "Pling"
	}
	if number % 5 == 0 {
		value += "Plang"
	}
	if number % 7 == 0 {
		value += "Plong"
	}

	return value
}
