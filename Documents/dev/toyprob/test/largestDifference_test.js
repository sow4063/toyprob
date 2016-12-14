var assert = require('chai').assert;
var largestDifference = require('../js/largestDifference.js');

describe('', function() {
  it('Basic Tests', function() {
    assert.equal( largestDifference([1,2,3]), 2 );
  });

  it('Basic Tests', function() {
    assert.equal( largestDifference([9,4,1,10,3,4,0,-1,-2]), 4 );
  });

  it('Basic Tests', function() {
    assert.equal( largestDifference([3,2,1]), 0 );
  });

});
