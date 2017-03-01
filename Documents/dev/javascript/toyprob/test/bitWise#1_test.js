var chai = require('chai');
var assert = chai.assert;
var swapper = require('../js/bitWise#1.js');

describe('bit Wise #1', function() {

  it('Basic Tests', function() {
    assert.equal(swapper(0,1), [1, 0]);
  });

  it('Basic Tests', function() {
    assert.equal(swapper(1,2), [2, 1]);
  });

});
