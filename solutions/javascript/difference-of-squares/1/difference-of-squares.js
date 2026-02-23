//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
    let total = 0;

    let id = 1;
    while (id <= this.number) {
      total += (id * id);
    }

    return total;
  }

  get squareOfSum() {
    let total = 0;

    let id = 1;
    while (id <= this.number) {
      total += id;
    }

    return total * total;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
