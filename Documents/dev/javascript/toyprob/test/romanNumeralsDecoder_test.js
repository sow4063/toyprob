var assert = require('chai').assert;
var solution = require('../js/romanNumeralsDecoder.js');

describe('Roman Numerals Decoder', function() {
  it('Basic Tests', function() {
    assert.equal(solution('XXI'), 21, 'XXI = 21');
  });

  it('Basic Tests', function() {
    assert.equal(solution('M'), 1000, 'M = 1000');
  });

  it('Basic Tests', function() {
    assert.equal(solution('MMVIII'), 2008, 'MMVIII = 2008');
  });

  it('Basic Tests', function() {
    assert.equal(solution('MM'), 2000, 'MM = 2000');
  });

  it('Basic Tests', function() {
    assert.equal(solution('VIII'), 8, 'VIII = 8');
  });

  it('Basic Tests', function() {
    assert.equal(solution('CM'), 900, 'CM = 900');
  });

  it('Basic Tests', function() {
    assert.equal(solution('XC'), 90, 'XC = 90');
  });

  it('Basic Tests', function() {
    assert.equal(solution('MCMXC'), 1990, 'MCMXC = 1990');
  });

});
