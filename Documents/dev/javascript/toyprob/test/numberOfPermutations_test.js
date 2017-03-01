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

  it('Long String(15) Test', function() {
    assert.equal(perms(556542039648780), 13621608000);
  });

  it('Long String(16) Test', function() {
    assert.equal(perms('a0z9md64s3zgs3j4'), 1307674368000);
  });

  it('Long String(17) Test', function() {
    assert.equal(perms('piq8h3ncu2112ic3i'), 3705077376000);
  });

  it('Long String(18) Test', function() {
    assert.equal(perms('3dlgdj110avdvsfkhw'), 266765571072000);
  });

  it('Long String(19) Test', function() {
    assert.equal(perms('mjwttqpyn3vbfxl97bt'), 10137091700736000);
  });


});
