
require('chai').should();

const circularDetector = require('../index.js');
const mocks = require('./mocks.js');

describe('Circular detector', function () {

  it('should return false for a linear linked list', function () {
    circularDetector(mocks.linear).should.be.false;
  });

  it('should return true for a circular linked list', function () {
    circularDetector(mocks.circular).should.be.true;
  });

});
