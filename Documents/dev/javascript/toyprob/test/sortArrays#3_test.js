var chai = require("chai");
var assert = chai.assert;
var sortme = require('../js/sortArrays#3.js');

describe("Sort Arrays #3", function(){
  it("Basic Tests", function(){
    assert.deepEqual( sortme(['zoo-1601', 'lee-1504', 'song-1409']), ['song-1409', 'lee-1504', 'zoo-1601']);
  });

  it("Basic Tests", function(){
    assert.deepEqual( sortme(['lee-1601', 'lee-1504', 'song-1409']), ['song-1409', 'lee-1504', 'lee-1601']);
  });
});
