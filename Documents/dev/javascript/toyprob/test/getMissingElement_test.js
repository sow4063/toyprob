var chai = require('chai');
var assert = chai.assert;
var getMissingElement = require('../js/getMissingElement.js');

describe('Return Missing Element', function() {
  it('Basic Tests', function() {
    assert.equal(getMissingElement( [0,5,1,3,2,9,7,6,4]), 8);
  });

  it('Basic Tests', function() {
    assert.equal(getMissingElement( [9,2,4,5,7,0,8,6,1]), 3);
  });
});
