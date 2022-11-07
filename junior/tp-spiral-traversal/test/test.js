'use strict';

require('chai').should();

const traverseSpirally = require('../index.js');
const mocks = require('./mocks.js');

describe('traverseSpirally', function () {

  it('should spirally traverse a string matrix', function () {
    traverseSpirally(mocks.matrix1).should.equal(mocks.solution1);
    traverseSpirally(mocks.matrix2).should.equal(mocks.solution2);
    traverseSpirally(mocks.skinnyMatrix).should.equal(mocks.skinnyMatrixSolution);
    traverseSpirally('5').should.equal('5');
  });

});
