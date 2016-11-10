var chai = require('chai');
var assert = chai.assert;
var mergesorted = require("../js/mergeSorted.js")

describe("Merge Sorted Arrays", function(){
  it("Basic Test", function(){
    assert.deepEqual( mergesorted([1,2],[3,4]), [1,2,3,4] );
  });

  it("Basic Test", function(){
    assert.deepEqual( mergesorted([1,2],[3]), [1,2,3]);
  });

  it("Basic Test", function(){
    assert.deepEqual( mergesorted([1],[2, 3]), [1,2,3]);
  });

});

mergesorted([1,2],[3,4]) //should: [1,2,3,4]

mergesorted([1,2],[3]) //should: [1,2,3]

mergesorted([1],[2, 3]) //should: [1,2,3]
