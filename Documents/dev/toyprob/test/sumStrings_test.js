var chai = require('chai');
var assert = chai.assert;
var sumStrings = require('../js/sumStrings.js');

describe('Sum Strings as Numbers', function() {
  it('Basic Tests', function(){
    assert.equal(sumStrings('123','456'),'579');
  });
});
