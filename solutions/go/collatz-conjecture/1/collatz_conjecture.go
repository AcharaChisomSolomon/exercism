package collatzconjecture

import "errors"

func CollatzConjecture(n int) (int, error) {
	if n <= 0 {
		return 0, errors.New("zero or negative numbers are invalid")
	}
	
	count := 0
	for {
		if n == 1 {
			break
		}

		if n % 2 == 0 {
			n /= 2
		} else {
			n = (n * 3) + 1
		}
		count++
	}
	return count, nil
}
