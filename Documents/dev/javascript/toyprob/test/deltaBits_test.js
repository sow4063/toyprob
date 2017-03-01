var assert = require('chai').assert;
var convertBits = require('../js/deltaBits.js');

describe('Delta Bits', function() {
  it('Basic Test', function() {
    assert.equal( convertBits(31, 14), 2);
  });

  it('Basic Test', function() {
    assert.equal( convertBits(7, 17), 3);
  });

});
