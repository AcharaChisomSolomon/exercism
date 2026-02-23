//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix) {
    this.matrix = matrix;
    this.length = this.matrix.length;
  }

  tick() {
    const newMatrix = [];

    for (let rowId = 0; rowId < this.length; rowId++) {
      const newRow = [];
      for (let colId = 0; colId < this.length; colId++) {
        newRow.push(this.getNewSpotValue([rowId, colId]));
      }
      newMatrix.push(newRow);
    }

    this.matrix = newMatrix;
  }

  getNewSpotValue(spot) {
    const [rowId, colId] = spot;
    const spotValue = this.matrix[rowId][colId];
    const liveNeighbours = this.getLiveNeighbourCount(spot);

    if (spotValue === 1 && (liveNeighbours === 2 || liveNeighbours === 3)) {
      return 1;
    } else if (spotValue === 0 && liveNeighbours === 3) {
      return 1;
    } else {
      return 0;
    }
  }

  getLiveNeighbourCount(spot) {
    const neighbours = this.getNeighbours(spot);

    let liveCount = 0;
    neighbours.forEach(neighbour => {
      if (this.matrix[neighbour[0]][neighbour[1]] === 1) {
        liveCount++;
      }
    })

    return liveCount;
  }

  neighbourInRange(neighbour) {
    const [row, col] = neighbour;
    return (
      row >= 0 
      && row < this.length
      && col >= 0
      && col < this.length
    );
  }

  getNeighbours(spot) {
    const [rowId, colId] = spot;
    const neighbors = [];

    const sides = [[-1, -1], [-1, 1], [-1, 0], [1, 1], [1, -1], [1, 0], [0, 1], [0, -1]];
    sides.forEach(side => {
      const possibleNeighbour = [rowId + side[0], colId + side[1]];
      if (this.neighbourInRange(possibleNeighbour)) {
        neighbors.push(possibleNeighbour);
      }
    })

    return neighbors;
  }

  state() {
    return this.matrix;
  }
}
