'use strict';

require('chai').should();

const primes = require('../index.js');
const primeTester = primes.tester;
const primeList = primes.list;
const mocks = require('./mocks.js');

describe('primeTester', function () {

  it('should test if a number is prime', function () {
    mocks.truePrimes.forEach(n => primeTester(n).should.be.true);
    mocks.falsePrimes.forEach(n => primeTester(n).should.be.false);
  });

});

describe('primeList', function () {

  it('should return an array of primes within the given range', function () {
    primeList(mocks.range1[0], mocks.range1[1]).should.eql(mocks.solution1);
    primeList(mocks.range2[0], mocks.range2[1]).should.eql(mocks.solution2);
  });

});
