var assert = require('chai').assert;
var uniq = require('../js/uniq.js');

describe("uniq(UNIX style)", function(){
  it("Basic Tests", function(){
    var input = ['a','a','b','b','c','a','b','c'];
    assert.deepEqual( uniq(input), ['a','b','c','a','b','c'] );
  });
});
