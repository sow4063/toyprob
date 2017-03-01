var assert = require('chai').assert;
var interleave = require('../js/interleaveArrays.js');

describe("Interleaving Arrays", function(){
  it("Basic tests", function(){
    assert.deepEqual( interleave([1, 2, 3], ['c', 'd', 'e']), [1, 'c', 2, 'd', 3, 'e'] );
  });

  it("Basic tests", function(){
    assert.deepEqual( interleave([1, 2, 3], [4, 5]), [1,4,2,5,3,null] );
  });

  it("Basic tests", function(){
    assert.deepEqual( interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 4, 7, 2, 5, 8, 3, 6, 9] );
  });

  it("Basic tests", function(){
    assert.deepEqual( interleave([]), [] );
  });
});
