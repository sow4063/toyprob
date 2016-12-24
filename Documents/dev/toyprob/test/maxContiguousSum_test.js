var assert = require('chai').assert;
var maxContiguousSum = require('../js/maxContiguousSum.js');

describe('Maximum Contiguous Sum', function(){
  it('Basic Tests', function(){
    assert.equal( maxContiguousSum([3, -4, 8, 7, -10, 19, -3]), 24 );
    assert.equal( maxContiguousSum([2, -3, -3, 9, -29, 8, -9]), 9 );
  });
});
