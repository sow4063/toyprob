var chai = require('chai');
var assert = chai.assert;
var revrot = require('../js/reverseOrRotate.js');

describe('Reverse Or Rotate', function() {
  it('Basic Tests', function() {
    assert.equal( revrot("1234", 0), "" );
    assert.equal( revrot("", 0), "" );
    assert.equal( revrot("1234", 5), "" );
    assert.equal( revrot("733049910872815764", 5), "330479108928157");
  });
});
