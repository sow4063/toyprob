var assert = require('chai').assert;
var palindromeChainLength = require('../js/palindromeChain.js');

describe('Palindrome Chain Length', function(){
  it('Basic Test', function() {
    assert.equal( palindromeChainLength(87) , 4 );
  })
});
