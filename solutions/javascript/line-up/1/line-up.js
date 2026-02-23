//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {
  const positionStr = `${position}`;
  const lastNum = positionStr[positionStr.length - 1];

  let end = "th";
  if (lastNum === "1") {
    end = "st"
  } else if (lastNum === "2") {
    end = "nd"
  } else if (lastNum === "3") {
    end = "rd"
  }

  return `${name}, you are the ${position}${end} customer we serve today. Thank you!`
};
