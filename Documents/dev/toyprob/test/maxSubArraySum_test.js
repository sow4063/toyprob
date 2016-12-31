var assert = require('chai').assert;
var maxSequence = require('../js/maxSubArraySum.js');

describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    assert.equal( maxSequence([]), 0 );
  });
  it("should work on the example",function(){
    assert.equal( maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6 );
  });
});
