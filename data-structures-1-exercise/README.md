# Data structures - Part 1

Here we go with some data structures fun... complete each section to elevate your programming consciousness!

Every data structure here below should correspond to a class in your code (use the pseudo-classical approach).

For this exercise you can’t use arrays, but you can substitute them using objects with numeric keys as long as you don’t use `Object.keys()` or `for (key in obj) {//etc...}` to loop over the keys.

## Stack

Read about stacks [here](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)), then implement one that provides the following methods:

- `push(string)` - Adds a string to the top of the stack and returns `true`.
- `pop()` - Removes and returns the string on the top of the stack. If the stack is empty it should return `null`.
- `size()` - Returns the number of items in the stack.

## Queue

Read about queues [here](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)), then implement one that provides the following methods:

- `enqueue(string)` - Adds a string to the back of the queue and returns `true`.
- `dequeue()` - Removes and returns the string at the front of the queue. If the queue is empty it should return `null`.
- `size()` - Returns the number of items in the queue.

## Linked list

Read about linked lists [here](https://en.wikipedia.org/wiki/Linked_list), then implement one so that each instance has a `head` and `tail` property.

Each node in the linked list should have a `value` and `next` property. The `next` property of the `tail` node should be `null`.

The class should provide these shared methods:

- `addToHead(value)` - Adds a node with the passed value to the beginning of the list and returns `true`.
- `addToTail(value)` - Adds a node with the passed value to the end of the list and returns `true`.
- `removeHead()` - Removes the first node from the list and returns its value. If the list is empty it should return `null`.
- `contains(value)` - Returns a boolean that reflects whether or not the passed value is in the linked list.

Now create a “double” linked list subclass using [ES6 syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Sub_classing_with_extends). For this you’ll need to add a `previous` property to each node, and upgrade the shared methods accordingly. Then add a new method:

- `removeTail()` - Removes the last node from the list and return its value.

## Getting started

To install the required dependencies run `npm install`.

## Extra credits

- Write tests for the single and double linked list.

