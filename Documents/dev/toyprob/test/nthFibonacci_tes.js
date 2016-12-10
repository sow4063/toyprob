var assert = require('chai').assert;
var nthFibo = require('../js/nthFibonacci.js');

describe("nth Fibonacci", function(){
  it("Basic Tests", function(){
    assert.equal( nthFibo(4), 2 );
  });
});
