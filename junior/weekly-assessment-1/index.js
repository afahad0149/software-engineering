'use strict';

// Weekly assessment 1 (1 hour)

// Start with the exercises in this file, then answer the questions
// that you find in "questions.md". If you're stuck on something,
// move on with the rest and come back to it after having completed
// the other parts. Obviously you can't look at any code outside
// of this folder, or check snippets from any source online

// Implement the following "underline" methods.
const _ = {};

// _.each(collection, iteratee, [context])
// Iterates over a collection of elements (i.e. array or object),
// yielding each in turn to an iteratee function, that is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Returns the collection for chaining.
_.each = (collection, iteratee, context) => {

  iteratee = iteratee.bind(context);

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  }
  else if (typeof collection === 'object') {
    Object.entries(collection).map(([key, value]) => {
      iteratee(value, key, collection);
    });
  }
  
  return collection;

};

// _.reduce(collection, iteratee, [accumulator], [context])
// Reduce boils down a collection of values into a single value.
// Accumulator is the initial state of the reduction,
// and each successive step of it should be returned by iteratee.
// Iteratee is passed four arguments: (accumulator, element, index|key, collection),
// and bound to the context if one is passed. If no accumulator is passed
// to the initial invocation of reduce, iteratee is not invoked on the first element,
// and the first element is instead passed as accumulator for the next invocation.
_.reduce = (collection, iteratee, accumulator, context) => {

  iteratee = iteratee.bind(context);

  _.each (collection, function (element, indexkey) {
    if (!accumulator) {
      accumulator = element;
    } else {
      accumulator = iteratee(accumulator, element, indexkey, collection);
    }
  });

  return accumulator;

};

// _.bind(function, object)
// Binds a function to an object (obviously without using `bind`), meaning that whenever
// the function is called, the value of "this" will be the object. Returns the bound function.
_.bind = function (func, obj) {

  return function () {
    return func.call(obj, ...arguments);
  };

};

// _.memoize(func)
// Memoizes a given function by caching the computed result.
// Useful for speeding up slow-running computations.
// You may assume that the memoized function takes only one argument
// and that it is a primitive. Memoize should return a function that when called,
// will check if it has already computed the result for the given argument
// and return that value instead of recomputing it.
_.memoize = func => {

  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    else {
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };

};

// Now, using the pesudo-classical approach, create a class named
// "UnderCollections" that has a property named "libraryDesc",
// and includes the collection methods you just implemented above
// (i.e. each and reduce).

function UnderCollections (libraryDesc) {
  this.libraryDesc = libraryDesc;
}

UnderCollections.prototype.each = _.each;
UnderCollections.prototype.reduce = _.reduce;


// Then, create a sub-class of "UnderCollections" named
// "UnderFunctions" that includes the function methods
// you implemented here above (i.e. bind and memoize).



// Finally, assign an instance of UnderCollections to "_.underCollections",
// with the value "collections" as "libraryDesc", and an instance of UnderFunctions
// to "_.underFunctions" with the value "functions" as "libraryDesc".

module.exports = _;
