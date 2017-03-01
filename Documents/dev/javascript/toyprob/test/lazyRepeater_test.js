var assert = require('chai').assert;
var makeLooper = require('../js/lazyRepeater.js');

describe("LazyRepeater", function(){
  var abc = makeLooper('abc');

  it("Basic Tests", function(){
    assert.equal( abc(), 'a' );
  });

  it("Basic Tests", function(){
    assert.equal( abc(), 'b' );
  });

  it("Basic Tests", function(){
    assert.equal( abc(), 'c' );
  });

  it("Basic Tests", function(){
    assert.equal( abc(), 'a' );
  });
});
