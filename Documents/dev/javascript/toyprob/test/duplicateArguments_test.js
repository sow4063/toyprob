var assert = require('chai').assert;
var solution = require('../js/duplicateArguments.js');

describe("Duplicate Arguments", function(){
  it("Basic Tests", function(){
    assert.equal( solution(1, 2, 3), false );
    assert.equal( solution(1, 2, 3, 2), true );
    assert.equal( solution('1', '2', '3', '2'), true );
  });
});
