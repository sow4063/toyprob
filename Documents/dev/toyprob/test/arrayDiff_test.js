var assert = require('chai').assert;
var difference = require('../js/arrayDiff.js');

describe("Array.diff", function(){
  it("Basic Tests", function(){
    assert.deepEqual( difference([1,2],[1]), [2] );
    assert.deepEqual( difference([1,2,2,2,3],[2]), [1,3] );
  });
});
