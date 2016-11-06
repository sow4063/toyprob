var chai = require('chai');
var assert = chai.assert;
var add = require('../js/addBigNumbers.js');

describe('Adding Big Numbers', function() {
  
  it('Basic Test', function() {
    assert.equal(add("123", "321"),"444");
    assert.equal(add("11", "99"), "110");
  });

});
