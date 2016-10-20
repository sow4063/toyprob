var chai = require('chai');
var assert = chai.assert;
var f = require('../js/sumOfManyInts.js');

describe('Test for Sum of Many ints', function(){

  it('f(10, 5)', function() {
    assert.equal(f(10, 5), 20);
  });

  it('f(20, 20)', function() {
    assert.equal(f(20, 20), 190);
  });

  it('f(15, 10)', function() {
    assert.equal(f(15, 10), 60);
  });

});
