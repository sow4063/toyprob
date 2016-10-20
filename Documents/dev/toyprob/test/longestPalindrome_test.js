var chai = require('chai');
var assert = chai.assert;
var longestPalindrome = require('../js/longestPalindrome.js');

describe('Test for Longest Palindrome', function(){

  it('should return 1', function() {
    assert.equal(longestPalindrome("a"), 1);
  });

  it('should return 2', function() {
    assert.equal(longestPalindrome("aa"), 2);
  });

  it('should return 2', function() {
    assert.equal(longestPalindrome("baa"), 2);
  });

  it('should not return 6', function() {
    assert.notEqual(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?");
  });

  it('should return 4', function() {
    assert.equal(longestPalindrome("baabcd"), 4);
  });

  it('should return 9', function() {
    assert.equal(longestPalindrome("baablkj12345432133d"), 9);
  });

});
