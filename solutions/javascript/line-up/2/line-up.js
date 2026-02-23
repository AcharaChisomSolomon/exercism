//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {
  const positionStr = `${position}`;
  const lastNum = positionStr[positionStr.length - 1];

  let end = "th";
  if (lastNum === "1" && position % 100 != 11) {
    end = "st"
  } else if (lastNum === "2" && position % 100 != 12) {
    end = "nd"
  } else if (lastNum === "3" && position % 100 != 13) {
    end = "rd"
  }

  return `${name}, you are the ${position}${end} customer we serve today. Thank you!`
};
