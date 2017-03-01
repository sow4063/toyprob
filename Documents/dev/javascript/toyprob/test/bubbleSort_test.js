var chai = require('chai');
var assert = chai.assert;
var bubbleSort = require('../js/bubbleSort.js');

describe('Bubble Sort', function() {
  it('Basic Tests', function() {
    assert.deepEqual(bubbleSort([2, 1, 3, 3, 5, 8, 0, 1, 0, 4]), [0, 0, 1, 1, 2, 3, 3, 4, 5, 8]);
  });
});
