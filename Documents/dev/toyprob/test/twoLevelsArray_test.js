var assert = require('chai').assert;
var flattenTwoLevels = require('../js/twoLevelsArray.js');

describe("Two Levels Array", function(){
  it("Basic Tests", function(){
    var array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
    assert.deepEqual( flattenTwoLevels(array), [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18] );
  });

  it("Basic Tests", function(){
    assert.deepEqual( flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]), [1,[2,3,4,5]] );
  });

});
