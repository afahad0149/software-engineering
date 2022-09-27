# Define the "EventedThing" class, so that its instances have
# an "on" and a "trigger" method to react to events. For example:
#
# eventedThing.on('meet', function (name) {
#  console.log('Nice to meet you, ' + name + '.');
# });
#
# eventedThing.trigger('meet', 'Sarah');
# -> 'Hi there!'
# -> 'Nice to meet you, Sarah.'
#
# eventedThing.trigger('whatever');
# -> nothing happens

class EventedThing:

    def __init__(self):
        self.events = {}

    def on (self, event, callback):
        self.events[event] = callback

    def trigger(self, event, *args):
        try:
            return self.events[event](*args)
        except:
            pass


eventedThing = EventedThing()

eventedThing.on('Hi', lambda name: print('Hello '+name) )

eventedThing.trigger('Hi', 'Sarah')
