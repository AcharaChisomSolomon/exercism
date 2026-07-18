package isbnverifier

func IsValidISBN(isbn string) bool {
	count, total := 10, 0
	
	for _, char := range isbn {
		isX   := char == 'X'
		isNum := char >= '0' && char <= '9'
		if isX || isNum {
			if isX && count != 1 {
				return false
			} 
			val := 10
			if !isX {
				val = int(char - '0')
			}
			total += val * count
			count--
		} else if char == '-' {
			continue
		} else {
			return false
		}
	}

	return count == 0 && total % 11 == 0
}
