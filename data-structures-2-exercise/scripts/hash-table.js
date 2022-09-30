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
    this.storage = Storage(size);
  }
  /*
  hashGen (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }
  */
  insert (key, value) {
    const index = hash(key, key.length)/10;
    this.storage.set(index, value);
    this.size++;
    return true;
  }

  retrieve (key) {
    const index = hash(key, key.length)/10;
    return this.storage.get(index);
  }

  remove (key) {
    const index = hash(key, key.length)/10;
    if (this.storage.get(index)) {
      this.storage.set(index, undefined);
      return true;
    }
    return false;
  }
}

module.exports = HashTable;
