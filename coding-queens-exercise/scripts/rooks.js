/*
'use strict';

function factorial (n) {
  let total = 1; 
  for (let i=1; i<=n; i++) {
    total = total * i; 
  }
  return total; 
}

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
const permutations2 = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations2([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

function getArrayMutations (arr, perms = [], len = arr.length) {
  if (len === 1) perms.push(arr.slice(0));

  for (let i = 0; i < len; i++) {
    getArrayMutations(arr, perms, len - 1);

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]];
  }

  return perms;
}

function calc (size) {
  if (!size) return 0;


  const combs = combinations(size);
  const perms = getArrayMutations(combs);
  return perms.length;
  
}
*/

'use strict';

function calc (size) {
  // Mathematical solution (factorial)
  if (size < 1) return 0;
  if (size === 1) return size;
  return size * calc(size - 1);
}

function recursiveCalc (size) {
  // Recursive solution (depth first)
  let pieces = 0;
  let solutions = 0;
  const cols = Array(size).fill(0);
  function inspectRow () {
    for (let i = 0; i < size; i++) {
      if (!cols[i]) {
        // Place piece
        cols[i] = 1;
        pieces++;
        // Increase solutions or inspect next row
        if (pieces === size) solutions++;
        else inspectRow();
        // Remove piece
        cols[i] = 0;
        pieces--;
      }
    }
  }
  inspectRow();
  return solutions;
}

module.exports = calc;
