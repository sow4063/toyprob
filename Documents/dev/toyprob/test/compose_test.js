var assert = require('chai').assert;
var compose = require('../js/compose.js');

describe("Compose Function", function(){

  var doubleTheValue = function(val) { return val * 2; }
  var addOneToTheValue = function(val) { return val + 1; }

  it("Basic Tests", function(){
    assert.equal( compose(5, doubleTheValue), 10 );
  });

  it("Basic Tests", function(){
    assert.equal( compose(5, doubleTheValue, addOneToTheValue), 11 );
  });
});
