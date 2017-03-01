var chai = require('chai');
var assert = chai.assert;
var titleCase = require('../js/titleCase.js');

describe('Title Case', function() {
  it('should equal', function() {
    assert.equal(titleCase(''), '');
  });

  it('should equal', function() {
    assert.equal(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
  });

  it('should equal', function() {
    assert.equal(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
  });

  it('should equal', function() {
    assert.equal(titleCase('the quick brown fox'), 'The Quick Brown Fox');
  });

  it('should equal', function() {
    assert.equal(titleCase('First a of in', 'an often into'), 'First A Of In');
  });

});
