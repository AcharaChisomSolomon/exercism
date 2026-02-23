//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(vals = []) {
    this.values = [...vals];
  }

  append(someList) {
    return new List([...this.values, ...someList.values]);
  }

  concat(lists) {
    let newValues = [...this.values];
    for (let i = 0; i < lists.values.length; i++) {
      newValues = [...newValues, ...lists.values[i]];
    }
    return new List(newValues);
  }

  filter(predicate) {
    const filteredValues = [];
    for (let i = 0; i < this.values.length; i++) {
      if (predicate(this.values[i])) {
        filteredValues.push(this.values[i]);
      }
    }
    return new List(filteredValues);
  }

  map(predicate) {
    const mappedValues = [];
    for (let i = 0; i < this.values.length; i++) {
      mappedValues.push(predicate(this.values[i]));
    }
    return new List(mappedValues);
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.values.length; i++) {
      count += 1;
    }
    return count;
  }

  foldl(predicate, accumulator) {
    for (let i = 0; i < this.values.length; i++) {
      accumulator = predicate(accumulator, this.values[i]);
    }
    return accumulator;
  }

  foldr(predicate, accumulator) {
    for (let i = this.values.length - 1; i >= 0; i--) {
      accumulator = predicate(accumulator, this.values[i].values);
    }
    return accumulator;
  }

  reverse() {
    const reversedArr = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      reversedArr.push(this.values[i]);
    }
    return new List(reversedArr);
  }
}
