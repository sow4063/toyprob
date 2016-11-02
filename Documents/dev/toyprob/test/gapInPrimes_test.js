var chai = require('chai');
var assert = chai.assert;
var gap = require('../js/gapInPrimes.js');

describe("Gap", function() {

  it("Basic tests",function() {
    assert.equal(gap(2,100,110), [101, 103]);
  });

  it("Basic tests",function() {
    assert.equal(gap(4,100,110), [103, 107]);
  });

  it("Basic tests",function() {
    assert.equal(gap(6,100,110), null);
  });

  it("Basic tests",function() {
    assert.equal(gap(8,300,400), [359, 367]);
    assert.equal(gap(10,300,400), [337, 347]);
  });

  it("Basic tests",function() {
    assert.equal(gap(10,300,400), [337, 347]);
  });

  it("Large Number tests",function() {
    assert.equal(gap(6,262127,362127), [262127, 262133]);
  });

  it("Big Number tests",function() {
    this.timeout(1200);
    assert.equal(gap(2,10000000,11000000), [ 10000139, 10000141 ]);
  });

});
