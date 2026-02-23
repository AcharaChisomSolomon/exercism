//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  isValidTriangle() {
    const allGreaterThanZero = this.sides.every(side => side > 0);
    const allSidesGreaterThanOtherTwo = (
      this.sides[0] + this.sides[1] >= this.sides[2]
      && this.sides[2] + this.sides[1] >= this.sides[0]
      && this.sides[0] + this.sides[2] >= this.sides[1]
    );
    return allGreaterThanZero && allSidesGreaterThanOtherTwo;
  }

  get isEquilateral() {
    if (!this.isValidTriangle()) return false;
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2];
  }

  get isIsosceles() {
    if (!this.isValidTriangle()) return false;
    return (
      this.sides[0] === this.sides[1]
      || this.sides[1] === this.sides[2]
      || this.sides[2] === this.sides[0]
    );
  }

  get isScalene() {
    if (!this.isValidTriangle()) return false;
    return (
      this.sides[0] !== this.sides[1]
      && this.sides[1] !== this.sides[2]
      && this.sides[2] !== this.sides[0]
    );
  }
}
