'use strict';

function quickSort (arr) {

  function sort (start, end) {
    if (end <= start) return;
    let pivot = arr[end];
    let left = start;
    let right = end;

    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    sort(start, right);
    sort(right + 1, end);
  }
  
  sort(0, arr.length - 1);
}

module.exports = quickSort;
