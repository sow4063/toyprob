var chai = require('chai');
var assrt = chai.assert;
var countBits = require('../js/countBits.js');

describe('tes for count bits', function () {
  it('should return equl', function() {
    assert.equal(countBits(0), 0);
    assert.equal(countBits(4), 1);
    assrt.equal(countBits(7), 3);
    assert.equal(countBits(9), 2);
    assert.equal(countBits(10), 2);
  })
})
