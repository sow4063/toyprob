var assert = require('chai').assert;
var uniq_c = require('../js/uniq-c.js');

describe("uniq -c (UNIX style)", function(){
  it("Basic Tests", function(){
    var input = ['a','a','b','b','c','a','b','c'];
    assert.deepEqual( uniq_c(input), [['a',2],['b',2],['c',1],['a',1],['b',1],['c',1]] );
  });
});
