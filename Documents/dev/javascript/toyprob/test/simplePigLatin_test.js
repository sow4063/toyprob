var assert = require('chai').assert;
var pigIt = require('../js/simplePigLatin.js');

describe('Simple Pig Latin', function(){
  it('Basic Tests', function(){
    assert.equal( pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay' );
  });

  it('Basic Tests', function(){
    assert.equal( pigIt('Pig latin is cool'),'igPay atinlay siay oolcay');
  });
});
