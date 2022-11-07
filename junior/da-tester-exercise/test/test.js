'use strict';

require('chai').should();

var methods = require('../index.js');
var instatags = methods.instatags;
var underline = methods.underline;
var mocks = require('./mocks.js');

describe('Instatags', function () {
  describe('evalHashtagFrequency', function () {
    var data;

    beforeEach(function () {
      data = mocks.instatags.data.slice();
    });

    it('should return an array of sorted tags', function () {
      instatags
        .evalHashtagFrequency(data)
        .should.eql(mocks.instatags.sortedTags);
    });

    it('should not modify the original data', function () {
      instatags.evalHashtagFrequency(data);
      data.should.eql(mocks.instatags.data);
    });

    it('should return an empty array if there is no data', function () {
      instatags.evalHashtagFrequency([]).should.eql([]);
    });
  });

  describe('filterTags', function () {
    var sorted;

    beforeEach(function () {
      sorted = mocks.instatags.sortedTags.slice();
    });

    it('should filter an array of sorted tags', function () {
      instatags.filterTags(sorted, 0).should.eql(mocks.instatags.sortedTags);
      instatags.filterTags(sorted, 2).should.eql(mocks.instatags.tagsMin2);
    });

    it('should not modify the original data', function () {
      instatags.filterTags(sorted, 0);
      sorted.should.eql(mocks.instatags.sortedTags);
    });

    it('should return an empty array if there is no data', function () {
      instatags.filterTags([], 0).should.eql([]);
      instatags.filterTags([], 2).should.eql([]);
    });
  });

  describe('filterMedia', function () {
    it('should filter user media by tag', function () {
      instatags
        .filterMedia(mocks.instatags.userMedia, 'hello')
        .should.eql(mocks.instatags.userMediaHello);
      instatags
        .filterMedia(mocks.instatags.userMedia, 'world')
        .should.eql(mocks.instatags.userMediaWorld);
    });
  });

  describe('evalHashtagFrequency and filterTags', function () {
    var data;

    beforeEach(function () {
      data = mocks.instatags.data.slice();
    });

    it('should return an array of sorted and filtered tags', function () {
      const tagFrequencies = instatags.evalHashtagFrequency(data);
      instatags
        .filterTags(tagFrequencies, 0)
        .should.eql(mocks.instatags.sortedTags);
      instatags
        .filterTags(tagFrequencies, 2)
        .should.eql(mocks.instatags.tagsMin2);
    });

    it('should return an empty array if there is no data', function () {
      const tagFrequencies = instatags.evalHashtagFrequency([]);
      instatags.filterTags(tagFrequencies, 0).should.eql([]);
      instatags.filterTags(tagFrequencies, 2).should.eql([]);
    });
  });
});

describe('Underline', function () {
  describe('max', function () {
    it('should return the max numeric value in a list', function () {
      underline
        .max(mocks.underline.numArr)
        .should.equal(mocks.underline.numArrMax);
      underline
        .max(mocks.underline.mixArr)
        .should.equal(mocks.underline.mixArrMax);
      underline
        .max(mocks.underline.numObj)
        .should.equal(mocks.underline.numObjMax);
      underline
        .max(mocks.underline.mixObj)
        .should.equal(mocks.underline.mixObjMax);
    });

    it('should rank using iteratee when provided', function () {
      underline
        .max(mocks.underline.objArr, mocks.underline.iteratee)
        .should.eql(mocks.underline.objArrMax);
    });

    it('should return -Infinity when there is no list with numeric value', function () {
      underline.max([]).should.equal(-Infinity);
      underline.max({}).should.equal(-Infinity);
      underline.max(null).should.equal(-Infinity);
      underline.max(undefined).should.equal(-Infinity);
      underline.max(true).should.equal(-Infinity);
      underline.max(false).should.equal(-Infinity);
      underline.max(NaN).should.equal(-Infinity);
      underline.max(mocks.underline.strArr).should.equal(-Infinity);
      underline.max(mocks.underline.strObj).should.equal(-Infinity);
    });
  });

  describe('min', function () {
    it('should return the min numeric value in a list', function () {
      underline
        .min(mocks.underline.numArr)
        .should.equal(mocks.underline.numArrMin);
      underline
        .min(mocks.underline.mixArr)
        .should.equal(mocks.underline.mixArrMin);
      underline
        .min(mocks.underline.numObj)
        .should.equal(mocks.underline.numObjMin);
      underline
        .min(mocks.underline.mixObj)
        .should.equal(mocks.underline.mixObjMin);
    });

    it('should rank using iteratee when provided', function () {
      underline
        .min(mocks.underline.objArr, mocks.underline.iteratee)
        .should.eql(mocks.underline.objArrMin);
    });

    it('should return Infinity when there is no list with numeric value', function () {
      underline.min([]).should.equal(Infinity);
      underline.min({}).should.equal(Infinity);
      underline.min(null).should.equal(Infinity);
      underline.min(undefined).should.equal(Infinity);
      underline.min(true).should.equal(Infinity);
      underline.min(false).should.equal(Infinity);
      underline.min(NaN).should.equal(Infinity);
      underline.min(mocks.underline.strArr).should.equal(Infinity);
      underline.min(mocks.underline.strObj).should.equal(Infinity);
    });
  });

  describe('size', function () {
    it('should return the size of a list', function () {
      underline.size([]).should.equal(0);
      underline.size({}).should.equal(0);
      underline
        .size(mocks.underline.numArr)
        .should.equal(mocks.underline.numArrSize);
      underline
        .size(mocks.underline.numObj)
        .should.equal(mocks.underline.numObjSize);
    });

    it('should return 0 when there is no list', function () {
      underline.size(null).should.equal(0);
      underline.size(undefined).should.equal(0);
      underline.size(true).should.equal(0);
      underline.size(false).should.equal(0);
      underline.size(NaN).should.equal(0);
    });
  });
});
