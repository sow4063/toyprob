var assert = require('chai').assert;
var findInArray = require('../js/findInArray.js');

describe("Find In Array", function(){
  it("Baisc Test", function(){
    var trueIfEven = function(value, index) { return (value % 2 === 0) };
    assert.equal( findInArray([1,3,5,6,7], trueIfEven), 3 );
  });
});
