'use strict';

require('chai').should();

require('../index.js');

describe('Yarra', () => {

  it(
    'should be a method available on any array',
    () => [].yarra.should.be.a('function')
  );

  it('should reverse an array in place and return it', () => {
    const arrOdd = [1, 2, 3];
    const arrEven = [4, 5, 6, 7];
    const reversedArrOdd = arrOdd.yarra();
    const reversedArrEven = arrEven.yarra();
    reversedArrOdd.should.eql([3, 2, 1]);
    reversedArrEven.should.eql([7, 6, 5, 4]);
    arrOdd.should.equal(reversedArrOdd);
    arrEven.should.equal(reversedArrEven);
    [4, 5, 6].yarra().should.eql([6, 5, 4]);
    [4, 5, 6, 7].yarra().should.eql([7, 6, 5, 4]);
  });

  it('should work on an empty array', () => {
    const arr = [];
    arr.yarra().should.equal(arr);
  });

});
