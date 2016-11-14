var chai = require('chai');
var assert = chai.assert;
var add = require('../js/chainAddingFunction.js');

describe('Chain Adding Function', function() {

  it('Basic Tests', function() {
    assert.equal(add(3)(4), 7);
    assert.equal(add(3)(5), 8);
    assert.equal(add(9)(-5), 4);
    assert.equal(add(1)(2)(3), 6);
  });

});
