
require('chai').should();

var eventedThing = require('../index.js');

describe('eventedThing', () => {

  it('should invoke the callback of a registered event', function () {
    let called = 0;
    eventedThing.on('meet', () => called++);
    eventedThing.trigger('meet');
    called.should.equal(1);
    eventedThing.trigger('meet');
    called.should.equal(2);
  });

  it('should pass provided arguments to callbacks', function () {
    let passedArgs;
    eventedThing.on('meet', (...args) => passedArgs = [...args]);
    eventedThing.trigger('meet', 'arg1');
    passedArgs.should.eql(['arg1']);
    eventedThing.trigger('meet', 'arg1', 'arg2');
    passedArgs.should.eql(['arg1', 'arg2']);
  });

  it('should do nothing for unregistered events', () => {
    let called = 0;
    eventedThing.on('meet', () => called++);
    eventedThing.trigger('whatever');
    called.should.equal(0);
  });

});
