//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2];
  }

  get isIsosceles() {
    return (
      this.sides[0] === this.sides[1]
      || this.sides[1] === this.sides[2]
      || this.sides[2] === this.sides[0]
    );
  }

  get isScalene() {
    return (
      this.sides[0] !== this.sides[1]
      && this.sides[1] !== this.sides[2]
      && this.sides[2] !== this.sides[0]
    );
  }
}
