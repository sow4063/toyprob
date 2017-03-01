var chai = require('chai');
var assert = chai.assert;
var wordWrap = require('../js/arbitraryWordWrapping.js');

describe("Solution", function(){
  it("should equal", function(){
    var input = "The quick brown fox jumped over the lazy developer.";
    var expectedResult = "The quick brown fox jump-\ned over the lazy develop-\ner.";
    assert.equal( wordWrap(input), expectedResult );
  });

  it("should equal for string which length is less then 25", function(){
    var input = "Test #1";
    var expectedResult = "Test #1";
    assert.equal( wordWrap(input), expectedResult );
  });

  it("should return empty string for empty input string", function(){
    var input = "";
    var expectedResult = "";
    assert.equal( wordWrap(input), expectedResult );
  });

  it("should equal", function(){
    var input = '1234567890123456789012345 1234567890';
    var expectedResult = "1234567890123456789012345\n 1234567890";
    assert.equal( wordWrap(input), expectedResult );
  });

});
