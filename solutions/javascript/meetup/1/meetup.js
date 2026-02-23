const DAY_IN_MILLISECONDS = 1 * 24 * 60  * 60 * 1000;
const DAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"
];

export const meetup = (year, month, potentialPosition, day) => {
  let date = new Date(year, month, 1);

  if (potentialPosition === "teenth") {
    date = new Date(year, month - 1, 13);
  } else if (potentialPosition === "first") {
    date = new Date(year, month - 1, 1);
  } else if (potentialPosition === "second") {
    date = new Date(year, month - 1, 8);
  } else if (potentialPosition === "third") {
    date = new Date(year, month - 1, 15);
  } else if (potentialPosition === "fourth") {
    date = new Date(year, month - 1, 22);
  }

  if (potentialPosition === "last") {

  } else {
    while (DAYS[date.getDay()] !== day) {
      date = new Date(date.getTime() + DAY_IN_MILLISECONDS);
    }
  }

  return date;
};
