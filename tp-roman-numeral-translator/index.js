'use strict';

// Roman numeral translator (45 mins)

// Write a function that takes a roman numeral as input,
// and returns the same number in Hindu-Arabic form
// (https://en.wikipedia.org/wiki/Roman_numerals).
// Extra credit: write a second function that takes
// a number as input and returns its roman numeral.

const dict = {
  I : 1,
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000,
  V̅ : 5000,
  X̅ : 10000
};

function romanToArabic (numeral) {
  let ret = 0;
  for (let i = 0; i < numeral.length; i++) {
    if ( dict[numeral[i]] < dict[numeral[i+1]])
      ret -= dict[numeral[i]];
    else ret += dict[numeral[i]];
  } return ret;
}

function arabicToRoman (number) {
  const invDict = {};
  Object.keys(dict).forEach(key => invDict[dict[key]] = key);
  let str = String(number);
  let ret = '';
  for (let i = str.length; i > 0; i--) {
    const n = str.slice (0, 1) * 10**(i-1);
    const k = String(n)[0];
    if ( k == 5 ) {
      ret += invDict[n];
    } else if ( k == 4 ) {
      const j = 10**(String(n).length - 1);
      ret += invDict[(n+j)/5]+invDict[n+j];
    } else if ( k == 9 ){
      const j = 10**(String(n).length - 1);
      ret += invDict[(n+j)/2]+invDict[n+j];
    } else { 
      for (let i = 0; i < k; i++) 
        ret += invDict[n/k];
    }
    str = str.slice (1, i);
  }
  return ret;
}

console.log(arabicToRoman(25934));

module.exports = {
  
  romanToArabic,

};
 
