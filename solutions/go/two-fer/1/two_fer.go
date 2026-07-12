// Package twofer handles creating two-fer statements.
package twofer

// ShareWith returns a string with the right two-fer statement.
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return "One for " + name + ", one for me."
}
