
// Highest word count (45 mins)

// Write a function that given a string returns an array containing
// the most frequent word in it. If the top frequency is shared by more than
// one word, the array will contain all of them (the order is not relevant).
// Your implementation should exclude anything that is not a word
// (e.g. punctuation and numbers), and use lodash methods where possible.
// If the input is an empty string, return an empty array.
// If the input is not a string, an error should be thrown.
// TIP: You'll need to use a regex.

var _ = require('lodash');

function highestWordCount (str) {

  if ( typeof str !== 'string' ) throw new Error();
  if ( str.length === 0 ) return [];

  str = str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,'');
  arr = str.split(' ');
  count = {};
  arr.forEach(element => {
    if ( /[a-z]/i.test(element)) {
      count[element] = (count[element] || 0) + 1;
    }
  });

  let max = 0;
  for (const [key, value] of Object.entries(count)) {
    if (value > max) {
      max = value;
    }
  }

  out = [];
  for (const [key, value] of Object.entries(count)) {
    if (value === max) {
      out.push(key);
    }
  }

  return out;

}

module.exports = highestWordCount;
