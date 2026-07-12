package hamming

import "errors"

func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("Sequences are not of the same length")
	}
	count := 0
	for i, char := range a {
		if char != rune(b[i]) {
			count += 1
		}
	}
	return count, nil
}
