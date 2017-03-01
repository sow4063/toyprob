var assert = require('chai').assert;
var ipsBetween = require('../js/countIP.js');

describe('Count IP Address', function(){
  it('Basic Tests', function(){
    assert.equal(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
  });

  it('Basic Tests', function(){
    assert.equal(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
  });
});
