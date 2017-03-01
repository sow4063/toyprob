var chai = require('chai');
var assert = chai.assert;
var factorial = require('../js/largeFactorials.js');

describe('Large Factorials', function() {
  it('Basic Tests', function() {
    assert.equal(factorial(1), '1', '1!');
  });

  it('Basic Tests', function() {
    assert.equal(factorial(5), '120', '5!');
  });

  it('Basic Tests', function() {
    assert.equal(factorial(9), '362880', '9!');
  });

  it('Basic Tests', function() {
    assert.equal(factorial(15), '1307674368000', '15!');
  });

});
