var assert = require('chai').assert;
var anagrams = require('../js/anagrams.js');

describe('Anagrams', function() {
  it('Basic Tests', function() {
    assert.deepEqual( anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'] );
  });

  it('Basic Tests', function() {
    assert.deepEqual( anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'] );
  });

  it('Basic Tests', function() {
    assert.deepEqual( anagrams('laser', ['lazing', 'lazy',  'lacer']), [] );
  });
});
