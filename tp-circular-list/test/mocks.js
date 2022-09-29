'use strict';

// Mocks

function LinkedListNode (next) {
  this.next = next;
}

function linkedList (size, circular) {
  let pivotPos = Math.floor(size/3);
  let head = new LinkedListNode;
  let tail = new LinkedListNode;
  head.next = tail;
  let pivot;
  for (let i = 0; i < size; i++) {
    let node = new LinkedListNode;
    if (i === pivotPos && circular) pivot = node;
    tail.next = node;
    tail = node;
  }
  if (circular) tail.next = pivot;
  return head;
}

const mocks = {
  linear: linkedList(50, false),
  circular: linkedList(50, true)
};

module.exports = mocks;
