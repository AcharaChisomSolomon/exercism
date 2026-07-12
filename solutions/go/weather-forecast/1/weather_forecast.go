// Package weather gives the weather forecast.
package weather

var (
	// CurrentCondition is a string that shows the weather condition of a place.
	CurrentCondition string

	// CurrentLocation is a string that shows the location of the place whose weather is being forecast.
	CurrentLocation  string
)

// Forecast returns a string with the weather forecast for the given location.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
