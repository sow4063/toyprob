var assert = require('chai').assert;
var decimalPlaces = require('../js/countDecimalPlaces.js');


describe('Count Decimal Places', function() {
  it('Basic Tests', function() {
  	assert.equal( decimalPlaces(3.14), 2 );
    assert.equal( decimalPlaces(2.e-14), 14 );
    assert.equal( decimalPlaces(-3.14e-21), 23 );
    assert.equal( decimalPlaces(10.75), 2 );
    assert.equal( decimalPlaces(NaN), 0 );
    assert.equal( decimalPlaces(Infinity), 0 );
  } );
} );




