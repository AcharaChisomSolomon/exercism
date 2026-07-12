package luhn

func Valid(id string) bool {
	runesId := []rune(id)
	idNums := []int{}
	for _, char := range runesId {
		if !(char == ' ' || (char >= '0' && char <= '9')) {
			return false
		}
		if char != ' ' {
			idNums = append(idNums, int(char - '0'))
		}
	}

	if len(idNums) <= 1 {
		return false
	}

	for i := len(idNums) - 2; i >= 0; i -= 2 {
		double := idNums[i] * 2
		if double > 9 {
			double -= 9
		}
		idNums[i] = double
	}

	total := 0
	for _, num := range idNums {
		total += num
	}
	return total % 10 == 0
}
