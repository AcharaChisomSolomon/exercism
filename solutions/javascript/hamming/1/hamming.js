export const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
    throw new Error('strands must be of equal length');
  }

  let distance = 0;
  for (let i = 0; i < dna1.length; i++) {
    if (dna1[i] !== dna2[i]) {
      distance += 1;
    }
  }

  return distance;
};
