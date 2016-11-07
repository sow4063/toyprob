var chai = require('chai');
var assert = chai.assert;
var a = require('../js/jsIsWeird.js');

describe("Main test", _=>{
  it('Basic Test', function() {
    assert.equal(a(),'a');
  });

});
