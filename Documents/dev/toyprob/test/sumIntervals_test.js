var chai = require('chai');
var assert = chai.assert;
var sumIntervals = require('../js/sumIntervals.js');

describe('sumIntervals', function(){
  it('should return the correct sum for non overlapping intervals', function(){
    var test1 = [[1,5]];
    var test2 = [[1,5],[6,10]];
    assert.equal(sumIntervals(test1), 4);
    assert.equal(sumIntervals(test2), 8);
  });

  it('should return the correct sum for overlapping intervals', function(){
    var test1 = [[1,5],[1,5]];
    var test2 = [[1,4],[7, 10],[3, 5]];
    assert.equal(sumIntervals(test1), 4);
    assert.equal(sumIntervals(test2), 7);
  });

  it('should return the correct sum for overlapping intervals', function(){
    var test1 = [ [ 1, 20 ], [ 2, 19 ], [ 5, 15 ], [ 8, 12 ] ];
    var test2 = [ [ 1, 20 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ];
    var test3 = [ [ 2, 9 ], [ 2, 6 ], [ 2, 4 ], [ 2, 9 ], [ 2, 5 ] ];
    var test4 = [ [ 1, 5 ], [ 7, 10 ], [ 3, 5 ] ];
    assert.equal(sumIntervals(test1), 19);
    assert.equal(sumIntervals(test2), 19);
    assert.equal(sumIntervals(test3), 7);
    assert.equal(sumIntervals(test4), 7);
  });

});
