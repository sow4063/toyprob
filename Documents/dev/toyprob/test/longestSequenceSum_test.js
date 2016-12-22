var assert = require('chai').assert;
var maxZeroSequence = require('../js/longestSequenceSum.js');

describe('Longest sequence with zero sum', function(){
  it('Basic Tests', function(){
    var arr = [25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11];
    assert.deepEqual( maxZeroSequence(arr), [92, -115, 17, 2, 2, 2] );
  });
});
