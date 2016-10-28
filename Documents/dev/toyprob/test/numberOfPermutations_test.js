var chai = require('chai');
var assert = chai.assert;
var perms = require('../js/numberOfPermutations.js');

describe("Basic tests", function() {

  it('should equal', function() {
    assert.equal(perms(2), 1);
  });

  it('should equal', function() {
    assert.equal(perms(25), 2);
  });

  it('should equal', function() {
    assert.equal(perms(342), 6);
  });

  it('should equal', function() {
    assert.equal(perms(1397), 24);
  });

  it('should equal', function() {
    assert.equal(perms(76853), 120);
  });

  it('should equal', function() {
    assert.equal(perms("a"), 1);
  });

  it('should equal', function() {
    assert.equal(perms("ab"), 2);
  });

  it('should equal', function() {
    assert.equal(perms("abc"), 6);
  });

  it('should equal', function() {
    assert.equal(perms(737), 3);
  });

  it('should equal', function() {
    assert.equal(perms(66666), 1);
  });


});
