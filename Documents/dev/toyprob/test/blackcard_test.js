var chai = require('chai');
var assert = chai.assert;
var blackCard = require('../js/blackcard.js');

describe('Test for blackcard', function() {

  it('should equal', function() {
    assert.equal( blackCard(['길동', '철수', '영희'], 5) , '영희');
  });

});
