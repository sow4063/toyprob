var assert = require('chai').assert;
var validBraces = require('../js/validBraces.js');

describe('Valid Braces', function() {
  
  it('Basic Tests', function() {
    assert.equal(validBraces( "(}" ), false);
  });

  it('Basic Tests', function() {
    assert.equal(validBraces( "[(])" ), false);
  });

  it('Basic Tests', function() {
    assert.equal(validBraces( "([{}])" ), true);
  });

  it('Basic Tests', function() {
    assert.equal(validBraces( "(){}[]" ), true);
  });

});
