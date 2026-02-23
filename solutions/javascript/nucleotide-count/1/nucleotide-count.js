export function countNucleotides(strand) {
  const dict = {
    "A": 0, "C": 0, "G": 0, "T": 0
  };

  for (let i = 0; i < strand.length; i++) {
    if (!(strand[i] in dict)) {
      throw new Error('Invalid nucleotide in strand');
    }
    dict[strand[i]] += 1;
  }

  return Object.keys(dict).sort().map(s => dict[s]).join(" ");
}
