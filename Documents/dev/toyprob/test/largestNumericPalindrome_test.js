var chai = require('chai');
var assert = chai.assert;
var numericPalindrome = require('../js/largestNumericPalindrome.js');

describe("Largest Numeric Palindrome", function(){
  // it ("should return 81518", function() {
  //   assert.equal(numericPalindrome(937,113),81518);
  // });

  it ("should return 484", function() {
    assert.equal(numericPalindrome(657,892),484);
  });

  // it ("should return 868", function() {
  //   assert.equal(numericPalindrome(48,9,3,67),868);
  // });

  // it ("should return 8", function() {
  //   assert.equal(numericPalindrome(15, 125, 8),8);
  // });
});
