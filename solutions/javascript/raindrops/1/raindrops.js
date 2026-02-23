//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let ans = "";

  if (num % 3 === 0) ans += "Pling";
  if (num % 5 === 0) ans += "Plang";
  if (num % 7 === 0) ans += "Plong";

  return ans || String(num);
};
