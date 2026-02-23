export class Allergies {
  constructor(allergyNum) {
    this.allergyNum = allergyNum;
    this.values = [
      "eggs", "peanuts", "shellfish", "strawberries",
      "tomatoes", "chocolate", "pollen", "cats"
    ]
    this.allergies = this.getAllergies();
  }

  getAllergies() {
    const binary = this.allergyNum.toString(2);
    const allergies = [];
    binary.split("").reverse().forEach((val, id) => {
      if (val === "1") {
        allergies.push(this.values[id]);
      }
    })
    return allergies;
  }

  list() {
    return this.allergies;
  }

  allergicTo(allergy) {
    return this.allergies.includes(allergy);
  }
}
