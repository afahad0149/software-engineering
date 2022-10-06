'use strict';

require('chai').should();

const giveMeTime = require('../index.js');

describe('giveMeTime', function () {

  it('should translate JS timestamps into user-friendly time descriptions', function () {
    giveMeTime(new Date(Date.now() - 28e1).getTime()).should.equal('now');
    giveMeTime(new Date(Date.now() - 45e3).getTime()).should.equal('now');
    giveMeTime(new Date(Date.now() - 65e3).getTime()).should.equal('1 min ago');
    giveMeTime(new Date(Date.now() - 13e4).getTime()).should.equal('2 mins ago');
    giveMeTime(new Date(Date.now() - 4.4e8).getTime()).should.equal('5 days ago');
    giveMeTime(new Date(Date.now() - 6.912e8).getTime()).should.equal('1 week ago');
    giveMeTime(new Date(Date.now() - 1.23e9).getTime()).should.equal('2 weeks ago');
    giveMeTime(new Date(Date.now() - 3.e9).getTime()).should.equal('1 month ago');
    giveMeTime(new Date(Date.now() - 2.63e10).getTime()).should.equal('10 months ago');
    giveMeTime(new Date(Date.now() - 3.416e10).getTime()).should.equal('1 year ago');
    giveMeTime(new Date(Date.now() - 6.4e10).getTime()).should.equal('2 years ago');
  });

});
