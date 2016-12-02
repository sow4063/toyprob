var assert = require('chai').assert;
var generateHashtag = require('../js/hashtagGenerator.js');

describe('Hash Tag Generator', function() {
  it('Baisc Tests', function() {
    assert.equal( generateHashtag(" Hello there thanks for trying my Kata"), "#HelloThereThanksForTryingMyKata" );
    assert.equal( generateHashtag(" Hello World "), "#HelloWorld" );
  });
});
