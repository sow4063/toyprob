var assert = require('chai').assert;
var each = require('../js/customEach.js');

describe("Custom Each for Array", function(){
  var letters = ['a', 'b', 'c', 'd', 'e'];
  var allowedLetters = [];

  letters.each(function(letter, index){
    // break out of the loop if we reached a letter with the value 'd'
    if(letter == 'd') {
      return true;
    }
    allowedLetters.push(letter);
  });

  it("Basic Test", function(){
    assert.deepEqual( allowedLetters , ['a', 'b', 'c'] );
  });
});
