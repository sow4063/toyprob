var assert = require('chai').assert;
var uniqueInOrder = require('../js/uniqueInOrder.js');

describe('Unique In Order', function() {
  it('Basic Tests', function() {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
  });

  it('Basic Tests', function() {
    assert.deepEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
  });

  it('Basic Tests', function() {
    assert.deepEqual(uniqueInOrder([1,2,2,3,3]), [1,2,3]);
  });

});
