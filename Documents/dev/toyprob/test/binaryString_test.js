var assert = require('chai').assert;
var toBinaryString = require('../js/binaryString.js');

describe('Binary String', function() {
  it('Basic Tests', function() {
    assert.equal( toBinaryString(6), '110' );
  });
})
