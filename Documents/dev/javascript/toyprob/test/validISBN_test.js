var assert = require('chai').assert;
var validISBN10 = require('../js/validISBN.js');

describe("ISBN-10 Validation", function(){
  it("Basic Tests", function(){
    assert.equal( validISBN10('1112223339'), true );
    assert.equal( validISBN10('1234554321'), true );
    assert.equal( validISBN10('1234512345'), false );
  });
});
