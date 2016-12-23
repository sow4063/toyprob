var assert = require('chai').assert;
var toDecimal = require('../js/numberToDecimal.js');

describe('Number to Decimal', function(){
  it('Basic Tests', function(){
    assert.equal( (1e+2).toDecimal(), 100 );
    assert.equal( (1e-2).toDecimal(), 0.01 );
    assert.equal( (1.234e+1).toDecimal(), 12.34 );
    assert.equal( (4.56e-4).toDecimal(), 0.000456 );
  });
});
