package isbnverifier

func IsValidISBN(isbn string) bool {
	count     := 10
	total     := 0
	
	for _, char := range isbn {
		if char == 'X' || (char >= '0' && char <= '9') {
			if char == 'X' && count != 1 {
				return false
			} 
			val := 10
			if (char != 'X') {
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
