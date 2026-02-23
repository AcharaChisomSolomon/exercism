export const score = (word) => {
  let score = 0;

  let letterScore = {
    "aeioulnrst": 1,
    "dg": 2,
    "bcmp": 3,
    "fhvwy": 4,
    "k": 5,
    "jx": 8,
    "qz": 10
  }

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    for (const letters in letterScore) {
      if (letters.includes(letter)) {
        score += letterScore[letters];
        break;
      }
    }
  }

  return score;
};
