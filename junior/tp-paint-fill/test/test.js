'use strict';

require('chai').should();

const paintFill = require('../index.js');

function clone (image) {
  return JSON.parse(JSON.stringify(image));
}

describe('paintFill', function () {

  let image;
  const newColor = 7;

  beforeEach(function () {
    image = [
      [1, 2, 3, 4],
      [2, 2, 5, 2],
      [3, 2, 4, 3],
      [9, 9, 2, 2],
      [9, 9, 2, 2]
    ];
  });

  it('should fill all the surrounding areas with the new color', function () {
    const image2 = clone(image);
    const point1 = [0, 1];
    const point2 = [2, 1];
    const res = [
      [1, 7, 3, 4],
      [7, 7, 5, 2],
      [3, 7, 4, 3],
      [9, 9, 7, 7],
      [9, 9, 7, 7]
    ];
    paintFill(image, point1, newColor);
    image.should.eql(res);
    paintFill(image2, point2, newColor);
    image2.should.eql(res);
  });

  it('should fill only one point when there are no surrounding areas', function () {
    const res = [
      [1, 2, 3, 4],
      [2, 2, 7, 2],
      [3, 2, 4, 3],
      [9, 9, 2, 2],
      [9, 9, 2, 2]
    ];
    const point = [1, 2];
    paintFill(image, point, newColor);
    image.should.eql(res);
  });

});
