var chai = require('chai');
var assert = chai.assert;
var partitions = require('../js/partitions.js');

describe('partitions', function() {
  it('examples from description', function() {
    assert.equal( partitions(4), ['a']);
  });
});
