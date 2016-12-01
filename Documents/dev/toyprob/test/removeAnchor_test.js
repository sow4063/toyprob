var assert = require('chai').assert;
var removeUrlAnchor = require('../js/removeAnchor.js');

describe('Remove Anchor from URL', function() {
  it('Baisc Tests', function() {
    assert.equal( removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com' );
    assert.equal( removeUrlAnchor('www.codewars.com?page=1'), 'www.codewars.com?page=1' );
  });
});
