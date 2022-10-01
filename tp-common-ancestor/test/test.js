
var should = require('chai').should();

const mocks = require('./mocks.js');

describe('commonAncestor', function () {

  it('should find the closest common ancestor', function () {
    mocks.gGma.commonAncestor(mocks.me, mocks.momCousin).should.equal(mocks.gGma);
    mocks.gGma.commonAncestor(mocks.me, mocks.cousin).should.equal(mocks.gMa);
    mocks.gMa.commonAncestor(mocks.me, mocks.cousin).should.equal(mocks.gMa);
    mocks.gGma.commonAncestor(mocks.me, mocks.me).should.equal(mocks.mom);
    mocks.gGma.commonAncestor(mocks.farCousin, mocks.momCousin).should.equal(mocks.gAnt);
  });

  it('should return null when there is no common ancestor', function () {
    should.equal(mocks.gGma.commonAncestor(mocks.gAnt, mocks.gGma), null);
    should.equal(mocks.gGma.commonAncestor(mocks.me, mocks.potato), null);
  });

});
