var assert = require('chai').assert;
var RomanNumerals = require('../js/RomanNumeralsHelper.js');

describe('Roman Numberals Helper', function() {
  it('Basic Tests', function() {
    assert.equal( RomanNumerals.toRoman(1000), 'M');
    assert.equal( RomanNumerals.fromRoman('M'), 1000);
  });
});
