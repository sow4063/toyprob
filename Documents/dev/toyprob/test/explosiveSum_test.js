var chai = require('chai');
var assert = chai.assert;
var sum = require('../js/explosiveSum.js');

describe('Test for explosive Sum', function() {
  it('should equal', function() {
    assert.equal(sum(-1), 0);
    assert.equal(sum(1), 1);
    assert.equal(sum(2), 2);
    assert.equal(sum(3), 3);
    assert.equal(sum(4), 5);
    assert.equal(sum(5), 7);
  });

  it('should work for big sum', function() {
    assert.equal(sum(10), 42);
    assert.equal(sum(50), 204226);
    assert.equal(sum(80), 15796476);
    assert.equal(sum(100), 190569292);
  });
});
