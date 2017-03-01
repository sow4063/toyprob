var assert = require('chai').assert;
var Range = require('../js/rangeClass.js');

describe('rangeClass', function(){
  var myRange = new Range(0,10);
  var evenNumbers = new Range(2,8,2); 

  it('Basic Tests', function(){
  	assert.equal( myRange.size(), 11 );

    assert.equal( evenNumbers.size(), 4 );
    assert.equal( evenNumbers.includes(2), true );
    assert.equal( evenNumbers.includes(3), false );

    var result = [];
    evenNumbers.each(function(val){ result.push(val)}),

    assert.deepEqual( result, [2,4,6,8] );
  });

  // it('Should return null if the start is not defined', function(){
  // 	var nullRange = new Range();
  // 	console.log('nullRange', nullRange);
  //   assert.equal( nullRange, null );
  // });
  
});

