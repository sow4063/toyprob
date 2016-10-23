var chai = require('chai');
var assert = chai.assert;
var count = require('../js/countCharacters.js');

describe('Test for count characters in string', function() {
  it('should equal', function() {
    assert.equal(count(''), {});
    assert.equal(count('aba'), { 'a': 2, 'b': 1 });
  });
});
