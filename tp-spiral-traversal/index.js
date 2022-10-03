

// Spiral traversal (45 mins)

// Write a function that accepts a matrix in string form
// (where columns are comma-separated, and each row is on a new line),
// and spirally traverses the matrix (from upper left to the center),
// returning a string that contains each value in respective order
// (comma-separated). For example:
//
// let string = `1,2,3
//               4,5,6
//               7,8,9`
//
// traverseSpirally(string) -> '1,2,3,6,9,8,7,4,5'

function traverseSpirally (matrix) {

  matrix = matrix.split('\n'); // generate rows
  matrix.forEach((row, i, arr) => arr[i] = row.split(',')); // generate columns
  let result = [];
  let startRow = 0;
  let startCol = 0;
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      result.push(matrix[endRow][i]);
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result.push(matrix[i][startCol]);
    }
    startCol++;
  }
  return result.join(',');
  
}


module.exports = traverseSpirally;
