//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {
  const lastOne = position % 10;
  const lastTwo = position % 100;
  
  let end = "th";
  if (lastOne === 1 && lastTwo != 11) {
    end = "st";
  } else if (lastOne === 2 && lastTwo != 12) {
    end = "nd";
  } else if (lastOne === 3 && lastTwo != 13) {
    end = "rd";
  }

  return `${name}, you are the ${position}${end} customer we serve today. Thank you!`;
};
