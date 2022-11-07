'use strict';

function insertionSort (arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    j = i - 1;
    while (arr[j] > temp && j >= 0) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
}

module.exports = insertionSort;
