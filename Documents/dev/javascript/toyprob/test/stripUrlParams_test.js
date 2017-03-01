var assert = require('chai').assert;
var stripUrlParams = require('../js/stripUrlParams.js');

describe("Strip Url Params", function(){

  it("Basic Tests", function(){
    assert.equal( stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']), 'www.codewars.com?a=1');
  });

  it("Basic Tests", function(){
    assert.equal( stripUrlParams('www.codewars.com', ['b']), 'www.codewars.com');
  });

  it("Basic Tests", function(){
    assert.equal( stripUrlParams('www.codewars.com?a=1&b=2&a=2'), 'www.codewars.com?a=1&b=2');
  });
  
});
