var assert = require('chai').assert;
var solution = require('../js/stripComments.js');

describe('Strip Comments', function() {
  it('Basic Tests', function() {
    var results = "apples, pears\ngrapes\nbananas";
    assert.equal(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]), results);
  });
});
