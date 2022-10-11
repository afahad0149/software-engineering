
// Many invocations (20 mins)

// Write a function that adds from many invocations,
// until it sees an empty invocation. If the first
// invocation is empty it should return undefined.
// For example:
// addMany(3)(4)(1)(7)() -> 15
// addMany() -> undefined

function addMany (num) {
  if (!num) return undefined;
  let sum = num;
  return function recursiveSum (x) {
    if (arguments.length) {
      sum += x;
      return recursiveSum;
    }
    return sum;
  };
}

module.exports = addMany;
