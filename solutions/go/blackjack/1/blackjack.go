package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten":
		fallthrough
	case "jack":
		fallthrough
	case "queen":
		fallthrough
	case "king":
		return 10
	default:
		return 0
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	card1Val  := ParseCard(card1)
	card2Val  := ParseCard(card2)
	playerVal := card1Val + card2Val
	dealVal   := ParseCard(dealerCard)

	if card1Val == 11 && card2Val == 11 {
		return "P"
	}

	if playerVal == 21 {
		if dealVal != 11 && dealVal != 10 {
			return "W"
		} else {
			return "S"
		}
	}

	if playerVal >= 17 && playerVal <= 20 {
		return "S"
	}

	if playerVal >= 12 && playerVal <= 16 {
		if dealVal >= 7 {
			return "H"
		} else {
			return "S"
		}
	}

	return "H"
}
