'use strict';

// Stack

function Stack () {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
  return true;
};

Stack.prototype.pop = function () {
  if ( this.length === 0 ) return null;
  this.length--;
  const value = this.storage[this.length];
  delete this.storage[this.length];
  return value;
};

Stack.prototype.size = function () {
  return this.length;
};


// Queue

function Queue () {
  this.storage = {};
  this.length = 0;
}

Queue.prototype.enqueue = function (value) {
  for (let i = this.length; i > 0; i--) {
    this.storage[i] = this.storage[i-1];
  }
  this.storage[0] = value;
  this.length++;
  return true;
};

Queue.prototype.dequeue = new Stack().pop;

Queue.prototype.size = function () {
  return this.length;
};

// Linked list

function LinkedList () {
  this.nodes = {};
  this.length = 0;
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToHead = function (value) {
  for (let i = this.length; i > 0; i--) {
    this.nodes[i] = this.nodes[i] || {};
    this.nodes[i-1] = this.nodes[i-1] || {};
    this.nodes[i].value = this.nodes[i-1].value;
    this.nodes[i].next = this.nodes[i-1].next;
  }
  this.nodes[0] = {};
  this.nodes[0].value = value;
  this.nodes[1] = this.nodes[1] || {};
  this.nodes[0].next = this.nodes[1].value || null;
  this.head = this.nodes[0].value;
  this.tail = this.nodes[this.length].value;
  this.length++;
  if ( this.length === 1 ) delete this.nodes[1];
  return true;
};

LinkedList.prototype.addToTail = function (value) {
  this.nodes[this.length] = {};
  this.nodes[this.length].value = value;
  this.nodes[this.length].next = null;
  if ( typeof this.nodes[this.length-1] !== 'undefined' ) 
    this.nodes[this.length-1].next = value;
  this.head = this.nodes[0].value;
  this.tail = this.nodes[this.length].value;
  this.length++;
  return true;
};

LinkedList.prototype.removeHead = function () {
  if ( this.length === 0 ) return null;
  const value = this.nodes[0].value;
  for ( let i = 0; i < this.length; i++ ) {
    this.nodes[i] = {...this.nodes[i+1]};
  }
  this.length--;
  delete this.nodes[this.length];
  if ( this.length > 0 ) {
    this.head = this.nodes[0].value;
    this.tail = this.nodes[this.length-1].value;
  }
  return value;
};

LinkedList.prototype.contains = function (value) {
  for (let i = 0; i < this.length; i++) {
    if ( this.nodes[i].value === value ) return true;
  }
  return false;
};

// DoubleLinked list

class DoubleLinkedList extends LinkedList {

  constructor () {
    super();
  }

  addPrevious () {
    this.nodes[0].previous = null;
    for (let i = 1; i < this.length; i++) {
      this.nodes[i].previous = this.nodes[i-1].value;
    }
  }

  addToHead (value) {
    super.addToHead(value);
    this.addPrevious ();
    return true;
  }

  addToTail (value) {
    super.addToTail(value);
    this.addPrevious ();
    return true;
  }

  removeHead () {
    if ( this.length > 1 )
      this.nodes[1].previous = null;
    return super.removeHead();
  }

  removeTail () {
    if ( this.length === 0 ) return null;
    this.length--;
    const value = this.nodes[this.length].value;
    delete this.nodes[this.length];
    if ( this.length > 1 )
      this.nodes[this.length-1].next = null;
    if ( this.length > 0 ) {
      this.head = this.nodes[0].value;
      this.tail = this.nodes[this.length-1].value;
    }
    return value;
  }

}

module.exports = {
  Stack,
  Queue,
  LinkedList,
  DoubleLinkedList
};


