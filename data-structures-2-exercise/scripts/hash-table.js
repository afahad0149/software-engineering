'use strict';

const helpers = require('./hash-table-helpers');

// These are your helpers, they're used to generate
// the storage and get the hash respectively. For more
// information check the "hash-table-helpers.js" file.
const Storage = helpers.Storage;
const hash = helpers.hash;

class HashTable {

  constructor (size) {
    this.size = size;
  }

  _hash (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  insert (key, value) {
    const index = this._hash(key);
    this[index] = value;
    this.size++;
    return true;
  }

  retrieve (key) {
    const index = this._hash(key);
    return this[index];
  }

  remove (key) {
    const index = this._hash(key);
    if (this[index] && this[index].length) {
      this[index] = undefined;
      this.size--;
      return true;
    }
    return false;
  }
}


module.exports = HashTable;
