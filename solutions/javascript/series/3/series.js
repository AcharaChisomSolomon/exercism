export class Series {
  constructor(series) {
    this.series = series.split("").map(Number);
  }

  slices(sliceLength) {
    if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length');
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (this.series.length === 0) throw new Error('series cannot be empty');

    const container = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      container.push(this.series.slice(i, i + sliceLength));
    }
    return container;
  }
}
