var chai = require('chai');
var assert = chai.assert;
var root = require('../js/rootNumberRedux.js');

describe('Root Number Redux', function() {
  it('Basic Test', function() {
    assert.equal(root(4, 2), 2);
  });

  it('Basic Test', function() {
    assert.equal(root(8, 3), 2);
  });

  it('Basic Test', function() {
    assert.equal(root(16,2), 4);
  });

  it('Basic Test', function() {
    assert.equal(root(27,3), 3);
  });

  it('Basic Test', function() {
    assert.equal(root(1e10,10), 10);
  });

  it('Basic Test', function() {
    assert.equal(root(6256875898678471000, 14.556587443597254), 1.9555155181909e+1);
  });

});
