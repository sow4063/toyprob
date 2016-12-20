var assert = require('chai').assert;
var alphanumeric = require('../js/noSecure.js');

describe('Not very secure', function(){
  it('Basic Tests', function(){
    assert.equal(alphanumeric("Mazinkaiser"), true);
    assert.equal(alphanumeric("hello world_"), false);
    assert.equal(alphanumeric("PassW0rd"), true);
    assert.equal(alphanumeric("     "), false);
  });
});
