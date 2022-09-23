
// Clonator (30 mins)

// Write a function that can create a deep copy of anything
// it gets passed. The generated copy should have the same own
// enumerable properties as the source, but modifying
// the copy should not affect the source in any way.

'use strict';

function clonator (source) {

  if (typeof source !== 'object' || source === null) {
    return source;
  }

  const out = Array.isArray(source) ? [] : {};

  return Object.keys(source).reduce((acc, key) => {
    acc[key] = clonator(source[key]);
    return acc;
  }, out);

}

module.exports = clonator;
