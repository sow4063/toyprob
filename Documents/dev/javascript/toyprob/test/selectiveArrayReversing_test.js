var assert = require('chai').assert;
var selReverse = require('../js/selective-array-reversing.js');


describe("selective-array-reversing", function() {

  it('Basic Tests', function(){
    assert.deepEqual( selReverse([2,4,6,8,10,12,14,16], 3), [6,4,2, 12,10,8, 16,14] );
    assert.deepEqual( selReverse([1,2,3,4,5,6], 2), [2,1, 4,3, 6,5] );  
  });
  
});