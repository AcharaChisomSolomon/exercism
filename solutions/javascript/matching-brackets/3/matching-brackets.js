export const isPaired = (string) => {
  const pairs = {
    "]": "[",
    ")": "(",
    "}": "{"
  };
  const brackets = "(){}[]";

  let current = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (brackets.includes(char)) {
      if (Object.values(pairs).includes(char)) {
        current += char;
      } else {
        if (current.length === 0) return false;
        const prevChar = current[current.length - 1];
        if (pairs[char] !== prevChar) return false;
        current = current.slice(0, current.length - 1);
      }
    }
  }

  return current.length === 0;
};
