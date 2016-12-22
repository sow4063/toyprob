var assert = require('chai').assert;
var greatestProduct = require('../js/largestProduct.js');

describe('Largest product in a series', function() {
  it('Basic Tests', function(){
    assert.equal( greatestProduct("123834539327238239583"), 3240 );
  });
});
