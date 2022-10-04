'use strict';

require('chai').should();

const diagonalDifference = require('../index.js');
const mocks = require('./mocks.js');

describe('diagonalDifference', function () {

  it('should return the difference between the sums of the matrix diagonals', function () {
    diagonalDifference(mocks.matrix1).should.equal(mocks.solution1);
    diagonalDifference(mocks.matrix2).should.equal(mocks.solution2);
  });

});
