package hamming

import "errors"

func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("Sequences are not of the same length")
	}
	count := 0
	runeA := []rune(a)
	runeB := []rune(b)
	for idx, char := range runeA {
		if char != runeB[idx] {
			count++
		}
	}
	return count, nil
}
