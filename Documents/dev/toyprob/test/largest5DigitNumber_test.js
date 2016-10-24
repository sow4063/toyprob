var chai = require('chai');
var assert = chai.assert;
var solution = require('../js/largest5DigitNumber.js');

describe('Test for largest 5 digit number', function() {
  it('should equal', function() {
    assert.equal(solution('1234567898765'),98765);
  })
});
