'use strict';

class Set {

  add (value) {
    return this[value] = true;
  }

  contains (value) {
    if (this[value])
      return true;
    return false;
  }
  
  remove (value) {
    return delete this[value];
  }
}

module.exports = Set;
