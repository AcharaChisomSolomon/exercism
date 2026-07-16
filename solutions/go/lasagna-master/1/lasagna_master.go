package lasagnamaster

import "slices"

// TODO: define the 'PreparationTime()' function
func PreparationTime(layers []string, minutesPerLayer int) int {
	if minutesPerLayer == 0 {
		minutesPerLayer = 2
	}
	return len(layers) * minutesPerLayer
}

// TODO: define the 'Quantities()' function
func Quantities(ingredients []string) (int, float64) {
	noodleWeight := 0
	sauceWeight  := 0.0
	for _, ingredient := range ingredients {
		if ingredient == "noodles" {
			noodleWeight += 50
		}
		if ingredient == "sauce" {
			sauceWeight  += 0.2
		}
	}
	return noodleWeight, sauceWeight
}

// TODO: define the 'AddSecretIngredient()' function
func AddSecretIngredient(friendsList []string, myList []string) {
	for _, item := range friendsList {
		if !slices.Contains(myList, item) {
			myList[len(myList) - 1] = item
		}
	}
}

// TODO: define the 'ScaleRecipe()' function
func ScaleRecipe(recipe []float64, portions int) []float64 {
	scale      := float64(portions) / 2.0
	new_recipe := []float64{}
	for _, value := range recipe {
		new_recipe = append(new_recipe, value * scale)
	}
	return new_recipe
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
