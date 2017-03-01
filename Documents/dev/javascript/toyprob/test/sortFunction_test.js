var assert = require('chai').assert;
var sort = require('../js/sortFunction.js');

describe("Sort Function", function(){
  it("Basic Tests", function(){
    assert.deepEqual(sort([1,3,2]), [1,2,3] );
  });

  it("Basic Tests", function(){
    assert.deepEqual(sort([1, 3, 2, 3, 4, 1]), [1, 1, 2, 3, 3, 4] );
  });

  it("Basic Tests", function(){
    assert.deepEqual(sort([4, 1, 3, 2, 2, 3, 4, 1]), [1, 1, 2, 2, 3, 3, 4, 4] );
  });

  it("Basic Tests", function(){
    assert.deepEqual(sort([1]), [1] );
  });

  it("Basic Tests", function(){
    assert.deepEqual(sort(['abc', 'adc', 'acc']), ['abc', 'acc', 'adc'] );
  });

});
