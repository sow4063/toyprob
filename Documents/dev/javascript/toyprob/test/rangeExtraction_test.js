var assert = require("chai").assert;
var solution = require('../js/rangeExtraction.js');

describe('Range Extraction', function() {
  it('Basic Tests', function() {
    var result = "-6,-3-1,3-5,7-11,14,15,17-20";
    var input = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
    assert.equal(solution(input), result);
  });
});
