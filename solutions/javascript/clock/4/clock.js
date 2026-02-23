export class Clock {
  constructor(hours = 0, minutes = 0) {
    let totalMinutes = this.getTotalMinutes(hours, minutes);

    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
  }

  getTotalMinutes(hours, minutes) {
    let mins = ((hours * 60) + minutes) % (24 * 60);
    if (mins < 0) {
      mins += 24 * 60;
    }
    return mins;
  }

  toString() {
    return `${String(this.hours).padStart(2, "0")}:${String(this.minutes).padStart(2, "0")}`;
  }

  plus(minutes) {
    let newMinutes = this.getTotalMinutes(this.hours, this.minutes + minutes);
    const hours = Math.floor(newMinutes / 60);
    const minute = newMinutes % 60;
    return new Clock(hours, minute);
  }

  minus(minutes) {
    let newMinutes = this.getTotalMinutes(this.hours, this.minutes - minutes);
    const hours = Math.floor(newMinutes / 60);
    const minute = newMinutes % 60;
    return new Clock(hours, minute);
  }

  equals(clock) {
    return this.hours === clock.hours && this.minutes === clock.minutes;
  }
}
