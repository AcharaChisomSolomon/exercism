//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n");
  }

  get rows() {
    return this.matrix.map(row => row.split(" ").map(val => Number(val)));
  }

  get columns() {
    const columns = [];
    const rows = this.rows();
    
    let colId = 0;
    while (colId < rows[0].length) {
      const column = [];
      rows.forEach(row => {
        column.push(row[colId]);
      })
      columns.push(column);
      colId += 1;
    }

    return columns;
  }
}
