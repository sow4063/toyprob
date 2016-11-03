var chai = require('chai');
var assert = chai.assert;
var findArr = require('../js/findArray.js');

describe("Basic Tests", function() {

  it("Simple Cases", function() {
    var arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
    var arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
    var rng = [-4, -1];
    var wanted = 'even';
    assert.equal(findArr(arrA, arrB, rng, wanted), []);
  });

  it("Simple Cases", function() {
    var arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3];
    var arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0];
    var rng = [-4, 4];
    var wanted = 'odd';
    assert.equal(findArr(arrA, arrB, rng, wanted), [1, 3]);
  });

  it("Simple Cases", function() {
    var arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
    var arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
    var rng = [-4, 4];
    var wanted = 'even';
    assert.equal(findArr(arrA, arrB, rng, wanted), [0, 2, 4]);
  });

});
