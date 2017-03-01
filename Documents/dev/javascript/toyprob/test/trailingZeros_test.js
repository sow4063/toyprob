var chai = require('chai');
var assert = chai.assert;
var zeros = require('../js/trailingZeros.js');

describe('Test for number of trailing zeros in a fatorial of a number ::', function(){
  it('should return 2', function(){
    assert.equal(zeros(12), 2);
  });

  it('should work for big number', function(){
    assert.equal(zeros(1000), 249);
  });

});
