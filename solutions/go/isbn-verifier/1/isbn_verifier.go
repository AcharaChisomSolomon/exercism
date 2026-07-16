package isbnverifier


func IsValidISBN(isbn string) bool {
	isbnRunes := []rune(isbn)
	count     := 10
	total     := 0
	
	for _, char := range isbnRunes {
		if char == 'X' {
			if count != 1 {
				return false
			} else {
				total += 10 * count
				count -= 1
			}
		} else if char >= '0' && char <= '9' {
			total += int(char - '0') * count
			count -= 1
		} else if char == '-' {
			continue
		} else {
			return false
		}
	}

	return count == 0 && total % 11 == 0
}
