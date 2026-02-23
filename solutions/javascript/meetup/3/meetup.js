const DAY_IN_MILLISECONDS = 1 * 24 * 60  * 60 * 1000;
const DAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"
];
const STARTERS = {
  "teenth" : 13,
  "first": 1,
  "second": 8,
  "third": 15,
  "fourth": 22
}

export const meetup = (year, month, potentialPosition, day) => {
  let date = new Date(year, month, 1);

  if (potentialPosition !== "last") {
    date = new Date(year, month - 1, STARTERS[potentialPosition]);
  }

  if (potentialPosition === "last") {
    do {
      date = new Date(date.getTime() - DAY_IN_MILLISECONDS);
    } while(DAYS[date.getDay()] !== day);
  } else {
    while (DAYS[date.getDay()] !== day) {
      date = new Date(date.getTime() + DAY_IN_MILLISECONDS);
    }
  }

  return date;
};
