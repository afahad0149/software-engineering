'use strict';

// Mocks
var mocks = {
  num: 0,
  string: 'This is a string',
  bool: true,
  func: function () {}
};

mocks.arr = [mocks.num, mocks.string, mocks.bool, mocks.func, '', null, undefined];
mocks.obj = {
  num: mocks.num,
  string: mocks.string,
  bool: mocks.bool,
  func: mocks.func,
  emptyString: '',
  null: null,
  undefined: undefined
};
mocks.nestedArr = [mocks.arr, mocks.obj];
mocks.nestedObj = {arr: mocks.arr, obj: mocks.obj};

module.exports = mocks;
