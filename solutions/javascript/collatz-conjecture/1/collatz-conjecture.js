//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  let count = 0;

  while (number > 1) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = (number * 3) + 1;
    }
    count += 1;
  }

  return count;
};
