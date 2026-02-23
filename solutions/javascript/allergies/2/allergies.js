export class Allergies {
  constructor(allergyNum) {
    this.allergyNum = allergyNum;
    this.allergies = this.getAllergies();
  }

  getAllergies() {
    const values = [
      "eggs", "peanuts", "shellfish", "strawberries",
      "tomatoes", "chocolate", "pollen", "cats"
    ]
    const binary = this.allergyNum.toString(2);
    const allergies = [];
    binary.split("").reverse().forEach((val, id) => {
      if (val === "1") {
        allergies.push(values[id]);
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
