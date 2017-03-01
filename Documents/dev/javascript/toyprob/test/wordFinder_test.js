var assert = require('chai').assert;
var Dictionary = require('../js/wordFinder.js');

describe('Word Finder', function() {
  it('Basic Tests', function() {
    var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
    assert.deepEqual( fruits.getMatchingWords('lemon'), [] );
    assert.deepEqual( fruits.getMatchingWords('cherr??'), [] );
    assert.deepEqual( fruits.getMatchingWords('?a?a?a'), ['banana', 'papaya'] );
    assert.deepEqual( fruits.getMatchingWords('??????'), ['banana', 'papaya', 'cherry'] );
  });
});
