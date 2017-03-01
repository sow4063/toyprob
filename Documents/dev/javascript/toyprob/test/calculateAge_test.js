var assert = require('chai').assert;
var getAge = require('../js/calculateAge.js');

describe("Calculate Age", function(){
  it("Basic Tests", function(){
    assert.equal( getAge(new Date('1980/01/01')), 33 );
    assert.equal( getAge(new Date('1913/01/01'), new Date('2013/01/01')), 100 );
    assert.equal( getAge(new Date('2008/02/29'), new Date('2032/03/01')), 24 );
    assert.equal( getAge(new Date('2008/01/01'), new Date('2000/01/01')), -8 );
  });
});
