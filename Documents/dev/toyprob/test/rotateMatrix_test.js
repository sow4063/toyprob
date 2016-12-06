var assert = require('chai').assert;
var rotate = require('../js/rotateMatrix.js');

describe("Rotate an array matrix", function(){

  var matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

  it("Test for clockwise", function(){
    assert.deepEqual( rotate(matrix, 'clockwise'), [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]);
  });
  
  it("Test for counter-clockwise", function(){
    assert.deepEqual( rotate(matrix2, 'counter-clockwise'), [[3, 6, 9], [2, 5, 8],  [1, 4, 7]]);
  });

});
