'use strict';

const { parallel } = require("gulp");

// Weekly assessment 3 (1 hour)

// Start with the exercises in this file, then answer the questions
// that you find in "questions.md". If you're stuck on something,
// move on with the rest and come back to it after having completed
// the other parts. Obviously you can't look at any code outside
// of this folder, or check snippets from any source online.

// Implement a function that takes a string and returns the longest
// palindrome in it, or "null" if there are none. A palindrome is a
// sequence of characters which reads the same backward or forward
// (e.g. "madam" or "kayak"). Count whitespaces as valid characters,
// and ignore the letter case (convert to lowercase). For example:
//
// longestPalindrome('My dad is a racecar athelete') -> 'a racecar a'

function longestPalindrome (str) {
  str = str.toLowerCase(); 
  let len = 0;
  let pal = '';
  for(let i = 0; i < str.length; i++) {
    const str2 = str.substr(i, str.length);
    for(let j = str.length+1; j > 0; j--) {
      const str3 = str2.substr(0, j);
      if (str3.length <= 1)
        continue;
      if (str3 == str3.split('').reverse().join('')) {
        if (str3.length > len) {
          len = str3.length;
          pal = str3;
        }
      }
    }
  }
  if (len === 0)
    return null;
  else
    return pal;
}

module.exports = longestPalindrome;
