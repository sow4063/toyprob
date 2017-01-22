var assert = require('chai').assert;
var allAnagrams = require('../js/allAnagrams.js');

describe('allAnagrams', function(){
  it('Basic Tests', function(){
  	var anagrams = allAnagrams('abc');
    assert.deepEqual( anagrams, [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ] );
  })
});