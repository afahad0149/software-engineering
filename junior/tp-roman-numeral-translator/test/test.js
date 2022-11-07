'use strict';

require('chai').should();

const { 
  
  romanToArabic,

} = require('../index.js');

describe('romanNumeralTranslator', function () {

  it('should translate roman numerals into decimal numbers', function () {
    romanToArabic('MCMLIV').should.equal(1954);
    romanToArabic('MCCLXXVIII').should.equal(1278);
  });

});
