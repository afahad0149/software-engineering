var mocks = {
  instatags: {
    data: [
      { tags: [] },
      { tags: ['hello'] },
      { tags: ['hello', 'world'] },
      { tags: ['hello', 'world', 'today'] },
    ],
    sortedTags: [
      { tag: 'hello', freq: 3 },
      { tag: 'world', freq: 2 },
      { tag: 'today', freq: 1 },
    ],
    tagsMin2: [
      { tag: 'hello', freq: 3 },
      { tag: 'world', freq: 2 },
    ],
    userMedia: [
      { tags: ['hello'] },
      { tags: ['world'] },
      { tags: ['hello', 'world'] },
      { tags: ['today'] },
    ],
    userMediaHello: [{ tags: ['hello'] }, { tags: ['hello', 'world'] }],
    userMediaWorld: [{ tags: ['world'] }, { tags: ['hello', 'world'] }],
  },

  underline: {
    numArr: [3, 5, 1, 2, 4],
    numArrMax: 5,
    numArrMin: 1,
    numArrSize: 5,
    strArr: ['hello', 'world', 'today'],
    mixArr: ['hello', 3, 'world', 5, 'today', 1],
    mixArrMax: 5,
    mixArrMin: 1,
    objArr: [
      {
        name: 'Mark',
        age: 27,
      },
      {
        name: 'Lisa',
        age: 21,
      },
      {
        name: 'Jack',
        age: 28,
      },
      {
        name: 'Sarah',
        age: 23,
      },
    ],
    objArrMax: {
      name: 'Jack',
      age: 28,
    },
    objArrMin: {
      name: 'Lisa',
      age: 21,
    },
    numObj: {
      price: 27,
      tax: 5,
      total: 32,
      commission: 8,
    },
    numObjMax: 32,
    numObjMin: 5,
    numObjSize: 4,
    strObj: {
      name: 'Mark',
      surname: 'Twain',
    },
    mixObj: {
      name: 'Mark',
      surname: 'Twain',
      age: 27,
      height: 178,
    },
    mixObjMax: 178,
    mixObjMin: 27,
  },
};

mocks.underline.iteratee = function (el, key, coll) {
  if (coll === mocks.underline.objArr) return el.age;
};

module.exports = mocks;
