var assert = require('chai').assert;
var csvColumns = require('../js/grabCSV.js');

describe('Grab CSV Columns', function(){
  it('Basic Tests', function(){
    assert.equal( csvColumns( "1,2,3\n4,5,6" , [0, 1] ), "1,2\n4,5" );
    assert.equal( csvColumns( "1,2\n3,4\n5,6" , [5, 6, 7] ) , "" );
    assert.equal( csvColumns( "a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j" , [1, 3, 5, 7] ), "b,d\n2,4\ng,i" );
  });
});
