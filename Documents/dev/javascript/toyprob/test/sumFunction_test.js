var chai = require('chai');
var assert = chai.assert;
var sum = require('../js/sumFunction.js');

describe('Sum Function', function() {
  it('should equal', function() {
    assert.equal(sum(2,3),5);
  });

  it('should equal', function() {
    assert.equal(sum(2)(3),5);
  });

  it('should equal', function() {
    assert.equal(sum(4,6),10);
  });

  it('should equal', function() {
    assert.equal(sum(4)(6),10);
  });

});
