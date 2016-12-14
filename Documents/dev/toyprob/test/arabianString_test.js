var assert = require('chai').assert;
var camelize = require('../js/arabianString.js');

describe('Arabian String', function(){
  it('Basic Tests', function(){
    assert.equal( camelize("java script"), "JavaScript" );
  });

  it('Basic Tests', function(){
    assert.equal( camelize("cODE warS"), "CodeWars" );
  });
});
