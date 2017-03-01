var assert = require('chai').assert;
var matrixMultiplication = require('../js/multiplyMatrix.js');

describe('Square Matrix Multiplication', function() {
  it('Basic Tests', function() {
    assert.deepEqual( matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]]), [[5, 4], [11, 8]] );
  });
});
