var assert = require('chai').assert;
var flatten = require('../js/flatten1.js');

describe('flatten one level', function() {
  it('Basic Tests', function() {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
    assert.deepEqual(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
    assert.deepEqual(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
  });
});
