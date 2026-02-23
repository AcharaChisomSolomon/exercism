//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const bookTypeCounts = Array(6).fill(0);
  books.forEach(book => {
    bookTypeCounts[book] += 1;
  })

  const bookGroupings = Array(6).fill(0);
  while (bookTypeCounts.some(count => count !== 0)) {
    let count = 0;
    for (let i = 1; i < bookTypeCounts.length; i++) {
      if (bookTypeCounts[i] > 0) {
        count += 1;
        bookTypeCounts[i] -= 1;
      }
    }
    bookGroupings[count] += 1;
  }

  while (bookGroupings[3] > 0 && bookGroupings[5] > 0) {
    bookGroupings[4] += 2;
    bookGroupings[3] -= 1;
    bookGroupings[5] -= 1;
  }

  const rates = {
    "1": 1,
    "2": 0.95,
    "3": 0.90,
    "4": 0.80,
    "5": 0.75
  }

  let totalPrice = 0;
  for (let i = 1; i < bookGroupings.length; i++) {
    totalPrice += bookGroupings[i] * i * 8 * rates[String(i)];
  }
  return totalPrice * 100;
};
