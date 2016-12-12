var assert = require('chai').assert;
var fibonacci = require('../js/fibonacci.js');

describe("Fibonacci", function(){
  it("Basic Tests", function(){
    assert.deepEqual( fibonacci(4), [0,1,1,2] );
  });

  it("Basic Tests", function(){
    assert.deepEqual( fibonacci(-1), [] );
  });
});
