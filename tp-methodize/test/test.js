
require('chai').should();

var methodize = require('../index.js');

function add (a, b) {
  return a + b;
}

Number.prototype.add = methodize(add);

describe('methodize', function () {

  it('should transform a binary function into a method', function () {
    (3).add(5).should.equal(8);
    (0).add(7).should.equal(7);
  });

});
