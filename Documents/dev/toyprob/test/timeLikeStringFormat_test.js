var chai = require('chai');
var assert = chai.assert;
var solution = require('../js/timeLikeStringFormat.js');

describe("Test for tiem-like-string-format", function(){
  it("should equal", function(){
    assert.equal( solution(800), '8:00' );
  });

  it("should equal", function(){
    assert.equal( solution(1000), '10:00' );
  });

  it("should equal", function(){
    assert.equal( solution(1451), '14:51' );
  });

  it("should equal", function(){
    assert.equal( solution(3351), '33:51' );
  });

  it("should equal", function(){
    assert.equal( solution(10000), 'Error: hour length is less than 3 digits and greater than 4' );
  });

});
