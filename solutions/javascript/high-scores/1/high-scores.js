export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    const sortedScores = this.scores.toSorted((a, b) => b - a);
    return sortedScores[0];
  }

  get personalTopThree() {
    const sortedScores = this.scores.toSorted((a, b) => b - a);
    return sortedScores.slice(0, 3);
  }
}
