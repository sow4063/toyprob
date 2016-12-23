var assert = require('chai').assert;
var firstNonRepeatingLetter = require('../js/nonRepeatLetter.js');

describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    assert.equal( firstNonRepeatingLetter('a'), 'a' );
    assert.equal( firstNonRepeatingLetter('stress'), 't' );
    assert.equal( firstNonRepeatingLetter('moonmen'), 'e' );
  });
});
