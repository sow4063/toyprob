var assert = require('chai').assert;
var findUniq = require('../js/find-the-unique-string.js');

describe('Find the unique string', function(){
  it('Basic Tests', function(){
    assert.equal( findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb' );
    assert.equal( findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo' );
    assert.equal( findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor' );
    assert.equal( findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter' );
  });
});

