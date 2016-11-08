var chai = require('chai');
var assert = chai.assert;
var lastDigit = require('../js/lastDigit.js');

describe('Last Digit of Numbers', function() {

  var r1 = Math.floor(Math.random() * 100);
  var r2 = Math.floor(Math.random() * 10);

  it('Applied Test', function() {
    assert.equal(lastDigit([r1]), r1 % 10);
  });

  it('Applied Test', function() {
    assert.equal(lastDigit([r1, r2]), Math.pow(r1 % 10, r2) % 10);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([]), 1);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([0,0]), 1);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([1,2]), 1);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([3, 4, 2]), 1);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([3,4,5]), 1);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([4,3,6]), 4);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([7,6,21]), 1);
  });

  it('Basic Test', function() {
    assert.equal(lastDigit([0,0,0]), 0); // 0^(0 ^ 0) = 0^1 = 0
  });

  it('Big Number Test', function() {
    assert.equal(lastDigit([123232,694022,140249] ), 6);
  });

  it('Big Number Test', function() {
    assert.equal(lastDigit([499942,898102,846073] ), 6);
  });

  it('Big Number Test', function() {
    assert.equal(lastDigit([12,30,21]), 6);
  });

  it('Big Number Test', function() {
    assert.equal(lastDigit([937640,767456,981242] ), 0);
  });

});
