//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const aliquotSum = num => {
  let total = 0;
  let id = 1;

  while (id < num) {
    if (num % id === 0) {
      total += id;
    }
    id += 1;
  }

  return total;
}

export const classify = (val) => {
  if (val < 1) throw new Error('Classification is only possible for natural numbers.');
  
  const aliquot = aliquotSum(val);
  if (aliquot === val) {
    return "perfect";
  } else if (aliquot < val) {
    return "abundant";
  } else {
    return "deficient";
  }
};
