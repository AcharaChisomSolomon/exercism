const isAnagram = (word, countObj) => {
  word.split("").forEach(char => {
    if (countObj[char]) {
      countObj[char] -= 1;
    }
  })

  return Object.values(countObj).every(val => val === 0);
}

export const findAnagrams = (target, words) => {
  const targetCount = target.toLowerCase().split("").reduce((obj, char) => {
    if (obj[char]) {
      return { ...obj, char: obj[char] + 1 };
    }
    return { ...obj, char: 1 };
  }, {});

  return words.filter(word => (
    isAnagram(word.toLowerCase(), {...targetCount}) 
    && target.toLowerCase() !== word.toLowerCase()
  ));
};
