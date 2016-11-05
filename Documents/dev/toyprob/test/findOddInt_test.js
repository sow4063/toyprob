var chai = require('chai');
var assert = chai.assert;
var findOdd = require('../js/findOddInt.js');

describe('Find the Odd Int', function() {

  it('Basic Test', function() {
    assert.equal(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
  });

  it('Basic Test', function() {
    assert.equal(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
  });

  it('Basic Test', function() {
    assert.equal(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
  });

  it('Basic Test', function() {
    assert.equal(findOdd([10]), 10);
  });

  it('Basic Test', function() {
    assert.equal(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
  });

  it('Basic Test', function() {
    assert.equal(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);
  });
  
});
