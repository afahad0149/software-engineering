'use strict';

// Weekly assessment 2 (1 hour)

// Start with the exercises in this file, then answer the questions
// that you find in "questions.md". If you're stuck on something,
// move on with the rest and come back to it after having completed
// the other parts. Obviously you can't look at any code outside
// of this folder, or check snippets from any source online.

// For each data structure here below, create a class using the
// pseudo-classical approach, or the new ES6 class definition.

// Implement a linked list, so that each instance has a "head" and
// "tail" property (when the list is empty both properties have value "null").
// Each node in the linked list should have a "value" and "next"
// property. The "next" property of the "tail" node should be "null".
// The class should provide these shared methods:

// "addToTail(value)" - Adds a node with the passed
// value to the end of the list and returns `true`.

// "removeHead()" - Removes the first node from the list and
// returns its value. If the list is empty it should return `null`.

// "contains(value)" - Returns a boolean that reflects
// whether or not the passed value is in the linked list.


class LinkedList {

  constructor () {
    this.nodes = {};
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail (value) {
    this.nodes[this.length] = {value, next: null};
    if ( typeof this.nodes[this.length-1] !== 'undefined' ) 
      this.nodes[this.length-1].next = value;
    this.head = this.nodes[0];
    this.tail = this.nodes[this.length];
    this.length++;
    return true;
  }

  removeHead () {
    if ( this.length === 0 ) return null;
    const value = this.nodes[0].value;
    for ( let i = 0; i < this.length; i++ ) {
      this.nodes[i] = this.nodes[i+1];
    }
    this.length--;
    delete this.nodes[this.length];
    this.head = this.nodes[0] || null;
    this.tail = this.nodes[this.length-1] || null;
    return value;
  }

  contains (value) {
    for (let i = 0; i < this.length; i++) {
      if ( this.nodes[i].value === value ) return true;
    }
    return false;
  }
  
}






// Implement a hash table, so that each instance has a "size" property 
// and a "storage" property. The size property should correspond to 
// the size of the underlying storage. Use the provided hash function 
// to convert any key into an index. Keep in mind that your 
// final implementation must handle conflicts (using linked lists).
// The hash table class should provide these shared methods:

// "insert(key, value)" - Takes a key (string), stores it
// with the associated value, and returns "true".

// "retrieve(key)" - Returns the value associated with the key
// (if the key does not exist, it returns "undefined").

// "remove(key)" - Returns a boolean, reflecting whether
// the key / value pair has been removed.

const helpers = require('./helpers.js');
const Storage = helpers.Storage;
const hash = helpers.hash;


class HashTable {

  constructor (size) {
    this.size = size;
    this.storage = Storage(this.size);
  }

  insert (key, value) {
    const index = hash(key, this.size);
    const node = this.storage.get(index);
    if (node) {
      let node2 = node;
      while (node2) {
        if (node2.key === key) {
          node2.value = value;
          return true;
        }
        node2 = node2.next;
      }
    }
    const addNode = {key, value};
    addNode.next = node;
    this.storage.set(index, addNode);
    return true;
  }

  retrieve (key) {
    const index = hash(key, this.size);
    const node = this.storage.get(index);
    if (node) {
      let tmp = node;
      while (tmp) {
        if (tmp.key === key) return tmp.value;
        tmp = tmp.next;
      }
    }
    return undefined;
  }

  remove (key) {
    const index = hash(key, this.size);
    let node = this.storage.get(index);
    while (node) {
      if (node.key === key) {
        delete node.key;
        return true;
      }
      node = node.next;
    }
    return false;
  }

}


module.exports = {
  LinkedList,
  HashTable
};
