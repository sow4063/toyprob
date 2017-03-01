var assert = require('chai').assert;
var validParentheses = require('../js/validParentheses.js');

describe('Valid Parentheses', function(){
  it('Basic Tests', function(){
    assert.equal( validParentheses( "()" ), true );
    assert.equal( validParentheses( ")(()))" ), false );
    assert.equal( validParentheses( "(" ), false );
    assert.equal( validParentheses( "(())((()())())" ), true );
  })
});
