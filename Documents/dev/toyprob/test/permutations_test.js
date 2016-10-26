var chai = require('chai');
var assert = chai.assert;
var permutations = require('../js/permutations.js');

describe('permutations', function() {
  it('examples from description', function() {
    assert.equal(permutations('a'), ['a']);
    assert.equal(permutations('ab').sort(), ['ab', 'ba'].sort());
    assert.equal(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
  });
});
