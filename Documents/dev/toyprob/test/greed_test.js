var assert = require('chai').assert;
var score = require('../js/greed.js');

describe( "Scorer Function", function() {
  it( "should value this as worthless", function() {
    assert.equal( score( [2, 3, 4, 6, 2] ), 0 );
  });

  it( "should value this triplet correctly", function() {
    assert.equal( score( [4, 4, 4, 3, 3] ), 400 );
  });

  it( "should value this mixed set correctly", function() {
    assert.equal( score( [2, 4, 4, 5, 4] ), 450 );
  });
});
