
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Nice to meet you, Sarah.'
// eventedThing.trigger('meet', 'Berta');
// -> 'Nice to meet you, Berta.'
//
// eventedThing.trigger('whatever');
// -> nothing happens

function EventedThing () {
  this._listen = {};
  Object.assign(this._listen, methods);
  return this._listen;
}

const methods = {};

methods.on = function (event, callback) {
  this[event] = callback;
};

methods.trigger = function (event, ...args) {
  if (this[event]) {
    return this[event](...args);
  }
};

module.exports = new EventedThing;
