/*
'use strict';

function combinations (n) {
  const arr = [];
  for ( let i = 0; i < n; i++) {
    let str = '';
    for ( let j = 0; j < n; j++) {
      if ( i === j ) str += '1';
      else str += '0';
    }
    arr.push(str);
  }
  return arr;
}

function permutations (array) {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(array);
  return result;
}

const combs = combinations(9);
const perms = permutations(combs);

function transpose (x) {
  const y = [];
  for (let i = 0; i < x.length; i++) {
    const tmp = [];
    for (let j = 0; j < x.length; j++) {
      tmp.push(x[j][i]);
    }
    y.push(tmp);
  }
  return y;
}

function inverse (mtx) {
  const arr = [];
  for (let row of mtx)
    arr.push(row.reverse());
  return arr.reverse();
}

const mtx = perms.map(r => r.map(e => e.split('')));

const arr = [];
for (let x of mtx) {
  const y = inverse(x);
  const n = x.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let rx = 0;
    let lx = 0;
    let ry = 0;
    let ly = 0;
    for (let j = 0; j < n-i; j++) {
      rx += parseInt(x[j][j+i]);
      lx += parseInt(x[j+i][j]);
      ry += parseInt(y[j][j+i]);
      ly += parseInt(y[j+i][j]);
    }
    if ( rx > 1 || lx > 1 || ry > 1 || ly > 1 ) {
      res++;
    }     
  }
  if ( res === 0 )
    arr.push(y);
}


console.log(arr.length);


function calc (size) {

}

*/

'use strict';

const helpers = {
  shiftRight: (arr) => [0, ...arr.slice(0, -1)],
  shiftLeft: (arr) => [...arr.slice(1), 0]
};

function calc (size) {
  // Implementation with arrays
  if (size < 1) return 0;
  const cols = Array(size);
  let solutions = 0;
  let pieces = 0;

  // Recursive inspect function
  function inspectRow (rightDiagonal = Array(size), leftDiagonal = Array(size)) {
    for (let i = 0; i < size; i++) {
      if (!cols[i] && !rightDiagonal[i] && !leftDiagonal[i]) {
        // Place piece
        cols[i] = 1;
        rightDiagonal[i] = 1;
        leftDiagonal[i] = 1;
        pieces++;
        // Increase solutions or inspect next row
        if (pieces === size) solutions++;
        else {
          const shiftedRight = helpers.shiftRight(rightDiagonal);
          const shiftedLeft = helpers.shiftLeft(leftDiagonal);
          inspectRow(shiftedRight, shiftedLeft);
        }
        // Remove piece
        cols[i] = 0;
        rightDiagonal[i] = 0;
        leftDiagonal[i] = 0;
        pieces--;
      }      
    }
  }
  inspectRow();
  return solutions;
}

function bitCalc (size) {
  // Implementation with bitwise operators
  if (size < 1) return 0;

  // Board and counters
  const boardLimit = 1 << size - 1;
  let solutions = 0;
  let pieces = 0;

  // Recursive inspect
  function inspect (cols = 0, rightDiagonal = 0, leftDiagonal = 0) {
    const row = cols | rightDiagonal | leftDiagonal;
    for (let i = 1; i <= boardLimit; i <<= 1) {
      if (~row & i) {
        // Place piece
        cols |= i;
        rightDiagonal |= i;
        leftDiagonal |= i;
        pieces++;
        // Increase solutions or inspect next row
        if (pieces === size) solutions++;
        else {
          const shiftedRight = rightDiagonal >>> 1;
          const shiftedLeft = leftDiagonal << 1;
          inspect(cols, shiftedRight, shiftedLeft);
        }
        // Remove piece
        cols ^= i;
        rightDiagonal ^= i;
        leftDiagonal ^= i;
        pieces--;
      }
    }
  }
  inspect();
  return solutions;
}

module.exports = calc;
