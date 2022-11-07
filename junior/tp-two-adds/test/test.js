'use strict';

require('chai').should();

var twoAdds = require('../index.js');

describe('twoAdds', function () {

  it('should add numbers from two invocations', function () {
    twoAdds(3)(4).should.equal(7);
    twoAdds(4)(5).should.equal(9);
  });

});
