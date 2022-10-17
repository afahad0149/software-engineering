/*
TypeScript helps you to define the inputs that your
functions accept. If you call your function, the TypeScript
compiler will make sure that the type of the arguments you pass in
match what you’ve said your function needs.
*/

// 1. Write a function called sum that will add two numbers together.

// 2. When working with strings coming from a database, the capitalization
//    of the stored data may not match what you want to display. 
//    Write a function called titleCase that can take a string in any case
//    and return a string where every word has the first letter capitalized and
//    the rest lower case. Make sure there are no TypeScript compiler errors.
//    For example: titleCase('classic rock') -> 'Classic Rock'

// 3. The arguments to a function can be different types, as can the return value.
//    Write a function called countNumberMatches that can tell you how many elements in
//    an array of numbers match a particular criteria.
//    For example: countNumberMatches([0, 1, 2, 3, 4], item => item > 1) -> 3

// 4. Make a version of the function that will work on other arrays,
//    not just arrays of numbers.
//    TIP: Check out generics in the TypeScript documentation.
//    For example: 
//      countMatches(
//        ['cat', 'dog', 'horse'], 
//         (animal => animal.length <= 3)
//       ) -> 2

function sum (a: number, b: number) {
  return a + b;
}

function titleCase (str: string) {
  const words = str.split(' ') || [str];
  let ret = '';
  for( let word of words)
    ret += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
  return ret.slice(0, -1); // delete last space
}

function countNumberMatches (arr: number[], condition: (item: number) => boolean) {
  let count = 0;
  arr.forEach( el => { if (condition(el)) count++; });
  return count;
}

function countMatches<T> (arr: T[], condition: (item: T) => boolean) {
  let count = 0;
  arr.forEach( el => { if (condition(el)) count++; });
  return count;
}

export { sum, titleCase, countNumberMatches, countMatches };
