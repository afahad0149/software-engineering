
// Diagonal difference (45 mins)

// Write a function that accepts a square matrix in string form
// (where columns are comma-separated, and each row is on a new line),
// and returns a string representing the difference between the sums
// of its diagonals. For example:
//
// let matrix =
// `7,-12,6
//  -3,8,1
//  23,-16,4`;
//
// diagonalDifference(matrix) -> '-18'
// (because 7 + 8 + 4 = 19, and 6 + 8 + 23 = 37, hence 19 - 37 = 18).

function diagonalDifference (matrix) {
  matrix = matrix.split('\n');
  matrix.forEach((row, i, arr) => arr[i] = row.split(',')); 
  const n = matrix.length;
  let d1 = d2 = 0;
  for (let i = 0; i < n; i++) {
    d1 += parseInt(matrix[i][i]);
    d2 += parseInt(matrix[i][n-i-1]);
  }
  return String(d1 - d2);
}

module.exports = diagonalDifference;
