var chai = require('chai');
var assert = chai.assert;
var rotate = require('../js/rotateArray.js');

describe('Test for rotate array', function() {
  var data = [1, 2, 3, 4, 5];

  it('should returen equal', function() {
    assert.equal(rotate(data, 1)  , [5, 1, 2, 3, 4])
    assert.equal(rotate(data, 2)  , [4, 5, 1, 2, 3])
    assert.equal(rotate(data, 3)  , [3, 4, 5, 1, 2])
    assert.equal(rotate(data, 4)  , [2, 3, 4, 5, 1])
    assert.equal(rotate(data, 5)  , [1, 2, 3, 4, 5])

    assert.equal(rotate(data, 0)  , [1, 2, 3, 4, 5])

    assert.equal(rotate(data, -1) , [2, 3, 4, 5, 1])
    assert.equal(rotate(data, -2) , [3, 4, 5, 1, 2])
    assert.equal(rotate(data, -3) , [4, 5, 1, 2, 3])
    assert.equal(rotate(data, -4) , [5, 1, 2, 3, 4])
    assert.equal(rotate(data, -5) , [1, 2, 3, 4, 5])

    assert.equal(rotate(['a', 'b', 'c'], 1), ['c', 'a', 'b'])
    assert.equal(rotate([1.0, 2.0, 3.0], 1), [3.0, 1.0, 2.0])
    assert.equal(rotate([true, true, false], 1), [false, true, true])
  });

  it('should return equal', function() {
    var data = [1, 2, 3, 4, 5]

    assert.equal(rotate(data, 7), [4, 5, 1, 2, 3])
    assert.equal(rotate(data, 11), [5, 1, 2, 3, 4])
    assert.equal(rotate(data, 12478), [3, 4, 5, 1, 2])
  });

});
