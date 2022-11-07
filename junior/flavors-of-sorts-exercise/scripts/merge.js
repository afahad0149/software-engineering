'use strict';

function merge (arr, start, mid, end) {

  let start2 = mid + 1;
  if (arr[mid] <= arr[start2]) return;

  while (start <= mid && start2 <= end) {  
    if ( !(arr[start] <= arr[start2]) ) {
      let value = arr[start2];
      let index = start2;
      while (index != start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;
      start++;
      mid++;
      start2++;
    }
    else start++;
  }
}
  
function mergeSort (arr, l=0, r=arr.length-1) {
  if (l < r) {
    let m = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}

module.exports = mergeSort;
