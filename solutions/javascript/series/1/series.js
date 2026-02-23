//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series.split("").map(Number);
  }

  slices(sliceLength) {
    const container = [];
    for (let i = 0; i < this.series.length - sliceLength; i++) {
      container.push(this.series.slice(i, i + sliceLength));
    }
    return container;
  }
}
