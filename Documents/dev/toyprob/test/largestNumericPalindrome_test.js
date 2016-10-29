var chai = require('chai');
var assert = chai.assert;
var numericPalindrome = require('../js/largestNumericPalindrome.js');

describe("Largest Numeric Palindrome", function() {

  // it ("should return 81518", function() {
  //   assert.equal(numericPalindrome(937,113),81518);
  // });
  //
  // it ("should return 484", function() {
  //   assert.equal(numericPalindrome(657,892),484);
  // });
  //
  // it ("should return 868", function() {
  //   assert.equal(numericPalindrome(48,9,3,67),868);
  // });
  //
  // it ("should return 8", function() {
  //   assert.equal(numericPalindrome(15, 125, 8),8);
  // });
  //
  // it ("should return 7764677", function() {
  //   this.timeout(30000);
  //   assert.equal(numericPalindrome(2824, 2399), 7764677);
  // });
  //
  // it ("should return 191", function() {
  //   this.timeout(30000);
  //   assert.equal(numericPalindrome(34735, 56), 191 );
  // });

  it ("should return 982080289", function() {
    this.timeout(50000);
    assert.equal(numericPalindrome(46, 0, 2, 72, 5465, 92, 150, 8, 0), 982080289 );
  });

  // it ("should work for big numbers", function() {
  //   this.timeout(50000);
  //   assert.equal(numericPalindrome(44606, 3480, 0, 88, 6, 59, 7), 8843309033488 );
  // });

  // it ("should return 86320802368", function() {
  //   assert.equal(numericPalindrome(184, 0, 57172, 88, 92, 20, 4), 86320802368 );
  // });


});
