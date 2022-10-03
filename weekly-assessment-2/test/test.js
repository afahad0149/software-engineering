'use strict';

const should = require('chai').should();

const DataStructures = require('../index.js');

const LinkedList = DataStructures.LinkedList;
const HashTable = DataStructures.HashTable;

describe('Linked list', function () {

  let linkedList;

  beforeEach(function () {
    linkedList = new LinkedList;
  });

  it('head and tail should be present and equal to "null" at the beginning', function () {
    linkedList.should.have.ownProperty('head');
    linkedList.should.have.ownProperty('tail');
    should.equal(linkedList.head, null);
    should.equal(linkedList.tail, null);
  });

  it('the class should provide an "addToTail()" method', function () {
    linkedList.should.not.have.ownProperty('addToTail');
    linkedList.addToTail.should.be.a('function');
  });

  it('the class should provide a "removeHead()" method', function () {
    linkedList.should.not.have.ownProperty('removeHead');
    linkedList.removeHead.should.be.a('function');
  });

  it('the class should provide a "contains()" method', function () {
    linkedList.should.not.have.ownProperty('contains');
    linkedList.contains.should.be.a('function');
  });

  it('should add to tail and remove from head', function () {
    should.equal(linkedList.head, null);
    should.equal(linkedList.tail, null);
    should.equal(linkedList.removeHead(), null);
    should.equal(linkedList.removeHead(), null);
    linkedList.addToTail('hello').should.be.true;
    linkedList.addToTail('world').should.be.true;
    linkedList.addToTail('today').should.be.true;
    linkedList.removeHead().should.equal('hello');
    linkedList.removeHead().should.equal('world');
    linkedList.removeHead().should.equal('today');
    should.equal(linkedList.head, null);
    should.equal(linkedList.tail, null);
  });

  it('when the list has only one value, head and tail should be the same', function () {
    linkedList.addToTail('hello');
    linkedList.tail.value.should.equal('hello');
    should.equal(linkedList.tail.next, null);
    linkedList.head.should.equal(linkedList.tail);
  });

  it('should indicate whether it contains a value', function () {
    linkedList.contains('hello').should.be.false;
    linkedList.contains('world').should.be.false;
    linkedList.addToTail('hello');
    linkedList.contains('hello').should.be.true;
    linkedList.contains('world').should.be.false;
    linkedList.addToTail('world');
    linkedList.contains('hello').should.be.true;
    linkedList.contains('world').should.be.true;
  });

});

describe('Hash table', function () {

  let hashTable;

  beforeEach(function () {
    hashTable = new HashTable(2);
  });

  it('each instance should have a "size" property', function () {
    const hashTable1 = new HashTable(2);
    const hashTable2 = new HashTable(3);
    hashTable1.size.should.equal(2);
    hashTable2.size.should.equal(3);
  });

  it('the class should provide an "insert()" method', function () {
    hashTable.should.not.have.ownProperty('insert');
    hashTable.insert.should.be.a('function');
  });

  it('the class should provide a "retrieve()" method', function () {
    hashTable.should.not.have.ownProperty('retrieve');
    hashTable.retrieve.should.be.a('function');
  });

  it('the class should provide a "remove()" method', function () {
    hashTable.should.not.have.ownProperty('remove');
    hashTable.remove.should.be.a('function');
  });

  it('should insert key / value pairs, and be able to retrieve them', function () {
    should.equal(hashTable.retrieve('hello'), undefined);
    hashTable.insert('hello', 'world').should.be.true;
    hashTable.retrieve('hello').should.equal('world');
    should.equal(hashTable.retrieve('world'), undefined);
    hashTable.insert('world', 'hello');
    hashTable.retrieve('world').should.equal('hello');
  });

  it('should update the value when the key already exists', function () {
    should.equal(hashTable.retrieve('hello'), undefined);
    hashTable.insert('hello', 'world').should.be.true;
    hashTable.retrieve('hello').should.equal('world');
    hashTable.insert('hello', 'everyone').should.be.true;
    hashTable.retrieve('hello').should.equal('everyone');
    hashTable.remove('hello').should.be.true;
    should.equal(hashTable.retrieve('hello'), undefined);
  });

  it('should delete keys, and make sure that they return "undefined"', function () {
    should.equal(hashTable.retrieve('hello'), undefined);
    should.equal(hashTable.retrieve('world'), undefined);
    hashTable.insert('hello', 'world');
    hashTable.retrieve('hello').should.equal('world');
    hashTable.remove('hello').should.be.true;
    should.equal(hashTable.retrieve('hello'), undefined);
    hashTable.remove('hello').should.be.false;
  });

  it('should delete nested keys', function () {
    should.equal(hashTable.retrieve('hello'), undefined);
    should.equal(hashTable.retrieve('world'), undefined);
    should.equal(hashTable.retrieve('bye'), undefined);
    hashTable.insert('hello', 'world');
    hashTable.insert('world', 'hello');
    hashTable.insert('bye', 'goodbye');
    hashTable.retrieve('hello').should.equal('world');
    hashTable.retrieve('world').should.equal('hello');
    hashTable.retrieve('bye').should.equal('goodbye');
    hashTable.remove('hello').should.be.true;
    should.equal(hashTable.retrieve('hello'), undefined);
    hashTable.remove('hello').should.be.false;
    hashTable.retrieve('world').should.equal('hello');
    hashTable.remove('world').should.be.true;
    should.equal(hashTable.retrieve('world'), undefined);
    hashTable.remove('bye').should.be.true;
    should.equal(hashTable.retrieve('bye'), undefined);
  });
});
