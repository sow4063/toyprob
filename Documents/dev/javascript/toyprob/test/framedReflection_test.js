var chai = require('chai');
var assert = chai.assert;
var mirror = require('../js/framedReflection.js');

describe('Framed Reflection', function() {

  it("Example tests", function() {
    assert.equal(mirror('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
  });

  it("Example tests", function() {
    assert.equal(mirror('Codewars'), '************\n* srawedoC *\n************');
  });

  it("Example tests", function() {
    assert.equal(mirror('tkrt qaow pxf'), '********\n* trkt *\n* woaq *\n* fxp  *\n********');
  });


});
