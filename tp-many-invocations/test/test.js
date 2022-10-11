'use strict';

var should = require('chai').should();

var addMany = require('../index.js');

describe('addMany', function () {

  it('should add numbers from multiple invocations', function () {
    addMany(3)(4)(1)(7)().should.equal(15);
    addMany(2)(8)().should.equal(10);
  });

  it('should return undefined if the first invocation is empty', function () {
    should.equal(addMany(), undefined);
  });

});
