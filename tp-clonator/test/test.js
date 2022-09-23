'use strict';

var should = require('chai').should();

var clonator = require('../index.js');
var mocks = require('./mocks.js');

describe('clonator', function () {

  it('should clone primitive values', function () {
    clonator(mocks.num).should.equal(mocks.num);
    clonator(mocks.string).should.equal(mocks.string);
    clonator(mocks.bool).should.equal(mocks.bool);
    clonator(mocks.func).should.equal(mocks.func);
    clonator('').should.equal('');
    should.equal(clonator(null), null);
    should.equal(clonator(undefined), undefined);
  });

  it('should clone composite values', function () {
    clonator(mocks.arr).should.eql(mocks.arr);
    clonator(mocks.arr).should.not.equal(mocks.arr);
    clonator(mocks.obj).should.eql(mocks.obj);
    clonator(mocks.obj).should.not.equal(mocks.obj);
    clonator(mocks.nestedArr).should.eql(mocks.nestedArr);
    clonator(mocks.nestedArr).should.not.equal(mocks.nestedArr);
    clonator(mocks.nestedObj).should.eql(mocks.nestedObj);
    clonator(mocks.nestedObj).should.not.equal(mocks.nestedObj);
  });

  it('should ignore prototype properties', function () {
    mocks.obj.constructor.prototype.foo = 'foo';
    const clonedObj = clonator(mocks.obj);
    Object.prototype.hasOwnProperty.call(clonedObj, 'foo').should.be.false;
  });

  it('should deep clone nested composite values', function () {
    const clonedArr = clonator(mocks.nestedArr);
    const clonedObj = clonator(mocks.nestedObj);
    clonedArr[0].should.not.equal(mocks.arr);
    clonedArr[0].should.eql(mocks.arr);
    clonedArr[1].should.not.equal(mocks.obj);
    clonedArr[1].should.eql(mocks.obj);
    clonedObj.arr.should.not.equal(mocks.arr);
    clonedObj.arr.should.eql(mocks.arr);
    clonedObj.obj.should.not.equal(mocks.obj);
    clonedObj.obj.should.eql(mocks.obj);
  });

});
