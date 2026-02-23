export const commands = (number) => {
  const binaryArr = (number).toString(2).padStart(5, "0").split("");

  const MAP = {
    "1": "jump",
    "2": "close your eyes",
    "3": "double blink",
    "4": "wink"
  }

  const values = [];
  for (let i = binaryArr.length - 1; i >= 1; i--) {
    if (binaryArr[i] === "1") {
      values.push(MAP[String(i)]);
    }
  }

  return binaryArr[0] === "0" ? values : values.toReversed();
};
