'use strict';

const should = require('chai').should();

const classes = require('../index.js');

describe('Stack', function () {

  let stack;

  beforeEach(function () {
    stack = new classes.Stack();
  });

  it('the class should provide a "push()" method', function () {
    stack.should.not.have.ownProperty('push');
    stack.push.should.be.a('function');
  });

  it('the class should provide a "pop()" method', function () {
    stack.should.not.have.ownProperty('pop');
    stack.pop.should.be.a('function');
  });

  it('should push and pop elements', function () {
    should.equal(stack.pop(), null);
    stack.push('hello').should.be.true;
    stack.push('world').should.be.true;
    stack.push('today').should.be.true;
    stack.pop().should.equal('today');
    stack.pop().should.equal('world');
    stack.pop().should.equal('hello');
    should.equal(stack.pop(), null);
    should.equal(stack.pop(), null);
  });

  it('should return its size', function () {
    stack.size().should.equal(0);
    stack.push('hello');
    stack.size().should.equal(1);
    stack.push('world');
    stack.size().should.equal(2);
    stack.pop();
    stack.size().should.equal(1);
    stack.pop();
    stack.size().should.equal(0);
  });

});

describe('Queue', function () {

  let queue;

  beforeEach(function () {
    queue = new classes.Queue();
  });

  it('the class should provide an "enqueue()" method', function () {
    queue.should.not.have.ownProperty('enqueue');
    queue.enqueue.should.be.a('function');
  });

  it('the class should provide a "dequeue()" method', function () {
    queue.should.not.have.ownProperty('dequeue');
    queue.dequeue.should.be.a('function');
  });

  it('should enqueue and dequeue elements', function () {
    should.equal(queue.dequeue(), null);
    queue.enqueue('hello').should.be.true;
    queue.enqueue('world').should.be.true;
    queue.enqueue('today').should.be.true;
    queue.dequeue().should.equal('hello');
    queue.enqueue('hello').should.be.true;
    queue.dequeue().should.equal('world');
    queue.dequeue().should.equal('today');
    queue.dequeue().should.equal('hello');
    should.equal(queue.dequeue(), null);
    should.equal(queue.dequeue(), null);
  });

  it('should return its size', function () {
    queue.size().should.equal(0);
    queue.enqueue('hello');
    queue.size().should.equal(1);
    queue.enqueue('world');
    queue.size().should.equal(2);
    queue.dequeue();
    queue.size().should.equal(1);
    queue.dequeue();
    queue.size().should.equal(0);
  });

});

describe('Linked list', function () {

  let linked;

  beforeEach(function () {
    linked = new classes.LinkedList();
  });

  it('the class should provide an "addToHead()" method', function () {
    linked.should.not.have.ownProperty('addToHead');
    linked.addToHead.should.be.a('function');
  });

  it('the class should provide an "addToTail()" method', function () {
    linked.should.not.have.ownProperty('addToTail');
    linked.addToTail.should.be.a('function');
  });

  it('the class should provide an "removeHead()" method', function () {
    linked.should.not.have.ownProperty('removeHead');
    linked.removeHead.should.be.a('function');
  });

  it('the class should provide an "contains()" method', function () {
    linked.should.not.have.ownProperty('contains');
    linked.contains.should.be.a('function');
  });

  it('the class should provide an "head" and "tail" method', function () {
    linked.should.have.ownProperty('head');
    linked.should.have.ownProperty('tail');
  });

  it('method .addToHead(x) should add nodes on top correctly', function () {
    const result = {
      '0': { value: 3, next: 2 },
      '1': { value: 2, next: 1 },
      '2': { value: 1, next: null }
    };
    should.equal(linked.addToHead(1), true);
    should.equal(Object.keys(linked.nodes).length, 1);
    should.equal(linked.addToHead(2), true);
    should.equal(linked.addToHead(3), true);
    should.equal(linked.length, 3);
    should.equal(linked.head, result[0].value);
    should.equal(linked.tail, result[2].value);
    for ( let key in result ) {
      linked.nodes[key].should.eql(result[key]);
    }
  });

  it('method .addToTail(x) should add nodes on bottom correctly', function () {
    const result = {
      '0': { value: 1, next: 2 },
      '1': { value: 2, next: 3 },
      '2': { value: 3, next: null }
    };
    should.equal(linked.addToTail(1), true);
    should.equal(Object.keys(linked.nodes).length, 1);
    should.equal(linked.addToTail(2), true);
    should.equal(linked.addToTail(3), true);
    should.equal(linked.length, 3);
    should.equal(linked.head, result[0].value);
    should.equal(linked.tail, result[2].value);
    for ( let key in result ) {
      linked.nodes[key].should.eql(result[key]);
    }
  });

  it('methods .addToHead(x) and method .addToTail(x) should add nodes on top and bottom correctly', function () {
    const result = {
      '0': { value: 3, next: 2 },
      '1': { value: 2, next: 1 },
      '2': { value: 1, next: 1 },
      '3': { value: 1, next: 2 },
      '4': { value: 2, next: 3 },
      '5': { value: 3, next: null }
    };
    should.equal(linked.addToHead(1), true);
    should.equal(linked.addToTail(1), true);
    should.equal(linked.addToHead(2), true);
    should.equal(linked.addToTail(2), true);
    should.equal(linked.addToHead(3), true);
    should.equal(linked.addToTail(3), true);
    should.equal(linked.length, 6);
    should.equal(linked.head, result[0].value);
    should.equal(linked.tail, result[5].value);
    for ( let key in result ) {
      linked.nodes[key].should.eql(result[key]);
    }
  });

  it('method .removeHead() should remove head nodes correctly', function () {
    const result = {
      '0': { value: 1, next: 2 },
      '1': { value: 2, next: 3 },
      '2': { value: 3, next: null }
    };
    should.equal(linked.removeHead(), null);
    linked.addToHead(1);
    linked.addToTail(1);
    linked.addToHead(2);
    linked.addToTail(2);
    linked.addToHead(3);
    linked.addToTail(3);
    should.equal(linked.removeHead(), 3);
    should.equal(linked.removeHead(), 2);
    should.equal(linked.removeHead(), 1);
    should.equal(linked.length, 3);
    should.equal(linked.head, result[0].value);
    should.equal(linked.tail, result[2].value);
    let i = 0;
    for ( let key in result ) {
      should.equal(parseInt(key), i);
      linked.nodes[key].should.eql(result[key]);
      i++;
    }
    should.equal(linked.removeHead(), 1);
    should.equal(linked.removeHead(), 2);
    should.equal(linked.head, 3);
    should.equal(linked.tail, 3);
    should.equal(linked.removeHead(), 3);
    should.equal(linked.removeHead(), null);
  });

  it('method .contains(x) should return true if value is in the list or false otherwise', function () {
    should.equal(linked.contains(1), false);
    linked.addToHead(1);
    linked.addToTail(2);
    linked.addToHead(3);
    linked.addToTail(4);
    linked.addToHead(5);
    linked.addToTail(6);
    should.equal(linked.contains(1), true);
    should.equal(linked.contains(3), true);
    should.equal(linked.contains(6), true);
    should.equal(linked.contains(8), false);
  });

});

describe('DoubleLinked list', function () {

  let doubleLinked;

  beforeEach(function () {
    doubleLinked = new classes.DoubleLinkedList();
  });

  it('the class should provide an "addToHead()" method', function () {
    doubleLinked.should.not.have.ownProperty('addToHead');
    doubleLinked.addToHead.should.be.a('function');
  });

  it('the class should provide an "addToTail()" method', function () {
    doubleLinked.should.not.have.ownProperty('addToTail');
    doubleLinked.addToTail.should.be.a('function');
  });

  it('the class should provide an "removeHead()" method', function () {
    doubleLinked.should.not.have.ownProperty('removeHead');
    doubleLinked.removeHead.should.be.a('function');
  });

  it('the class should provide an "removeTail()" method', function () {
    doubleLinked.should.not.have.ownProperty('removeTail');
    doubleLinked.contains.should.be.a('function');
  });

  it('the class should provide an "contains()" method', function () {
    doubleLinked.should.not.have.ownProperty('contains');
    doubleLinked.contains.should.be.a('function');
  });

  it('the class should provide an "head" and "tail" method', function () {
    doubleLinked.should.have.ownProperty('head');
    doubleLinked.should.have.ownProperty('tail');
  });

  it('method .addToHead(x) should add nodes on top correctly', function () {
    const result = {
      '0': { value: 3, next: 2, previous: null },
      '1': { value: 2, next: 1, previous: 3 },
      '2': { value: 1, next: null, previous: 2 }
    };
    should.equal(doubleLinked.addToHead(1), true);
    should.equal(Object.keys(doubleLinked.nodes).length, 1);
    should.equal(doubleLinked.addToHead(2), true);
    should.equal(doubleLinked.addToHead(3), true);
    should.equal(doubleLinked.length, 3);
    should.equal(doubleLinked.head, result[0].value);
    should.equal(doubleLinked.tail, result[2].value);
    for ( let key in result ) {
      doubleLinked.nodes[key].should.eql(result[key]);
    }
  });

  it('method .addToTail(x) should add nodes on bottom correctly', function () {
    const result = {
      '0': { value: 1, next: 2, previous: null },
      '1': { value: 2, next: 3, previous: 1 },
      '2': { value: 3, next: null, previous: 2 }
    };
    should.equal(doubleLinked.addToTail(1), true);
    should.equal(Object.keys(doubleLinked.nodes).length, 1);
    should.equal(doubleLinked.addToTail(2), true);
    should.equal(doubleLinked.addToTail(3), true);
    should.equal(doubleLinked.length, 3);
    should.equal(doubleLinked.head, result[0].value);
    should.equal(doubleLinked.tail, result[2].value);
    for ( let key in result ) {
      doubleLinked.nodes[key].should.eql(result[key]);
    }
  });

  it('methods .addToHead(x) and method .addToTail(x) should add nodes on top and bottom correctly', function () {
    const result = {
      '0': { value: 3, next: 2, previous: null },
      '1': { value: 2, next: 1, previous: 3 },
      '2': { value: 1, next: 1, previous: 2 },
      '3': { value: 1, next: 2, previous: 1 },
      '4': { value: 2, next: 3, previous: 1 },
      '5': { value: 3, next: null, previous: 2 }
    };
    should.equal(doubleLinked.addToHead(1), true);
    should.equal(doubleLinked.addToTail(1), true);
    should.equal(doubleLinked.addToHead(2), true);
    should.equal(doubleLinked.addToTail(2), true);
    should.equal(doubleLinked.addToHead(3), true);
    should.equal(doubleLinked.addToTail(3), true);
    should.equal(doubleLinked.length, 6);
    should.equal(doubleLinked.head, result[0].value);
    should.equal(doubleLinked.tail, result[5].value);
    for ( let key in result ) {
      doubleLinked.nodes[key].should.eql(result[key]);
    }
  });

  it('method .removeHead() should remove head nodes correctly', function () {
    const result = {
      '0': { value: 1, next: 2, previous: null },
      '1': { value: 2, next: 3, previous: 1 },
      '2': { value: 3, next: null, previous: 2 }
    };
    should.equal(doubleLinked.removeHead(), null);
    doubleLinked.addToHead(1);
    doubleLinked.addToTail(1);
    doubleLinked.addToHead(2);
    doubleLinked.addToTail(2);
    doubleLinked.addToHead(3);
    doubleLinked.addToTail(3);
    should.equal(doubleLinked.removeHead(), 3);
    should.equal(doubleLinked.removeHead(), 2);
    should.equal(doubleLinked.removeHead(), 1);
    should.equal(doubleLinked.length, 3);
    should.equal(doubleLinked.head, result[0].value);
    should.equal(doubleLinked.tail, result[2].value);
    let i = 0;
    for ( let key in result ) {
      should.equal(parseInt(key), i);
      doubleLinked.nodes[key].should.eql(result[key]);
      i++;
    }
    should.equal(doubleLinked.removeHead(), 1);
    should.equal(doubleLinked.removeHead(), 2);
    should.equal(doubleLinked.head, 3);
    should.equal(doubleLinked.tail, 3);
    should.equal(doubleLinked.removeHead(), 3);
    should.equal(doubleLinked.removeHead(), null);
  });

  it('method .removeTail() should remove tail nodes correctly', function () {
    const result = {
      '0': { value: 3, next: 2, previous: null },
      '1': { value: 2, next: 1, previous: 3 },
      '2': { value: 1, next: null, previous: 2 },
    };
    should.equal(doubleLinked.removeTail(), null);
    doubleLinked.addToHead(1);
    doubleLinked.addToTail(1);
    doubleLinked.addToHead(2);
    doubleLinked.addToTail(2);
    doubleLinked.addToHead(3);
    doubleLinked.addToTail(3);
    should.equal(doubleLinked.removeTail(), 3);
    should.equal(doubleLinked.removeTail(), 2);
    should.equal(doubleLinked.removeTail(), 1);
    should.equal(doubleLinked.length, 3);
    should.equal(doubleLinked.head, result[0].value);
    should.equal(doubleLinked.tail, result[2].value);
    let i = 0;
    for ( let key in result ) {
      should.equal(parseInt(key), i);
      doubleLinked.nodes[key].should.eql(result[key]);
      i++;
    }
    should.equal(doubleLinked.removeTail(), 1);
    should.equal(doubleLinked.removeTail(), 2);
    should.equal(doubleLinked.head, 3);
    should.equal(doubleLinked.tail, 3);
    should.equal(doubleLinked.removeTail(), 3);
    should.equal(doubleLinked.removeTail(), null);
  });

  it('method .contains(x) should return true if value is in the list or false otherwise', function () {
    should.equal(doubleLinked.contains(1), false);
    doubleLinked.addToHead(1);
    doubleLinked.addToTail(2);
    doubleLinked.addToHead(3);
    doubleLinked.addToTail(4);
    doubleLinked.addToHead(5);
    doubleLinked.addToTail(6);
    should.equal(doubleLinked.contains(1), true);
    should.equal(doubleLinked.contains(3), true);
    should.equal(doubleLinked.contains(6), true);
    should.equal(doubleLinked.contains(8), false);
  });

});
