'use strict';

const should = require('chai').should();

const longestPalindrome = require('../index.js');

describe('longestPalindrome', function () {
  it('should return the longest palindrome', function () {
    longestPalindrome('My dad is a racecar athelete').should.equal('a racecar a');
    longestPalindrome('That trip with a kayak was quite an adventure!').should.equal(' kayak ');
    should.equal(longestPalindrome(' '), null);
    should.equal(longestPalindrome('aa'), 'aa');
    should.equal(longestPalindrome('lol'), 'lol');
    //should.equal(longestPalindrome('lool'), 'lool');
    should.equal(longestPalindrome('loool'), 'loool');
    should.equal(longestPalindrome('no looool ok'), 'o looool o');
  });

  it('should return "null" if there are no palindromes', function () {
    should.equal(longestPalindrome(''), null);
    should.equal(longestPalindrome('a grand test'), null);
  });

  it('should ignore character casing (lower or upper)', function () {
    should.equal(
      longestPalindrome('My dad is a raCecar athelete'),
      'a racecar a'
    );
  });

  it('should find palindromes with spaces inside', function () {
    should.equal(longestPalindrome('dude to ot lies'), ' to ot ');
  });
});