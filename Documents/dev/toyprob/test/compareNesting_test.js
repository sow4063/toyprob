var assert = require('chai').assert;
var sameStructureAs = require('../js/compareNesting.js');

describe("Compare Nesting Structure", function(){
  it("Basic Test : should true", function(){
    assert.equal( [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ), true );
  });

  it("Basic Test : should true", function(){
    assert.equal( [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ), true );
  });

  it("Basic Test : should true", function(){
    assert.equal( [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ), true );
  });

  it("Basic Test : should false", function(){
    assert.equal( [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ), false );
  });

  it("Basic Test : should false", function(){
    assert.equal( [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ), false );
  });

  it("Basic Test : should false", function(){
    assert.equal( [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ), false );
  });

  it("Basic Test : should true", function(){
    assert.equal( [1,'[',']'].sameStructureAs( ['[',']',1] ), true );
  });

});
