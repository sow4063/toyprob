var assert = require('chai').assert;
var arraysSimilar = require('../js/arraysSimilar.js');

describe("ArraysSimilar", function(){
  it("Basic Tests", function(){

    var arr1 = [1, 2, 2, 3, 4];
    var arr2 = [2, 1, 2, 4, 3];
    var arr3 = [1, 2, 3, 4];
    var arr4 = [1, 2, 3, "4"];

    assert.equal( arraysSimilar(arr1, arr2), true );
    assert.equal( arraysSimilar(arr2, arr3), false );
    assert.equal( arraysSimilar(arr3, arr4), false );

  });
});
