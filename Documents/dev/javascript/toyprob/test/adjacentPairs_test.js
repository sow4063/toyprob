var assert = require('chai').assert;
var countAdjacentPairs = require('../js/adjacentPairs.js');

describe('Adjacent pairs in a string', function() {
  it('Basic Tests', function() {
    assert.equal( countAdjacentPairs(''), 0 );
  });

  it('Basic Tests', function() {
    assert.equal( countAdjacentPairs('cat dog dog'), 1 );
  });

  it('Basic Tests', function() {
    assert.equal( countAdjacentPairs('dog dog dog'), 1 );
  });

  it('Basic Tests', function() {
    assert.equal( countAdjacentPairs('cat cat dog dog cat'), 2 );
  });
});
