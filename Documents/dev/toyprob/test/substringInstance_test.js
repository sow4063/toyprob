var assert = require('chai').assert;
var searchSubstr = require('../js/substringInstance.js');

describe("Substring Instance Count", function(){
  it("should test for overlapping case", function(){
    assert.equal( searchSubstr('aa_bb_cc_dd_bb_e', 'bb'), 2 );
    assert.equal( searchSubstr('aaabbbcccc', 'bbb'), 1 );
    assert.equal( searchSubstr('aaa', 'aa'), 2 );
  });

  it("should test for non-overlapping case", function(){
    assert.equal( searchSubstr('aaa', 'aa', false), 1 );
    assert.equal( searchSubstr('aaabbbaaa', 'bb', false), 1 );
  });

  it("should test for empty string", function(){
    assert.equal( searchSubstr('', 'a'), 0 );
    assert.equal( searchSubstr('a', ''), 0 );
    assert.equal( searchSubstr('', ''), 0 );
  });

});
