var assert = require('chai').assert;
var genfib = require('../js/fibonacciGenerator.js');

describe("Fibonacci Generator", function(){

  var fib = genfib();

  it("Basic Tests", function(){
    assert.equal( fib(), 0 );
  });

  it("Basic Tests", function(){
    assert.equal( fib(), 1 );
  });

  it("Basic Tests", function(){
    assert.equal( fib(), 1 );
  });

  it("Basic Tests", function(){
    assert.equal( fib(), 2 );
  });
});
