'use strict';

require('chai').should();

var highestWordCount = require('../index.js');

describe('highestWordCount', function () {

  it('should return ["yes"] when passed "oh yes, no wait... yes!"', function () {
    highestWordCount('oh yes, no wait... yes!').should.eql(['yes']);
  });

  it('should return ["I", "see"] when passed "I see, mmm... I see, 2 and 2."', function () {
    highestWordCount('I see, mmm... I see, 2 and 2.').should.eql(['I', 'see']);
  });

  it('should return an empty array when passed an empty string', function () {
    highestWordCount('').should.eql([]);
  });

  it('should throw an error when is not passed a string', function () {
    [1, true, [], {}, function () {}, null, undefined].forEach(function (el) {
      (function () {
        highestWordCount(el);
      }).should.throw(Error);
    });
  });

});
