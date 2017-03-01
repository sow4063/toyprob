var assert = require('chai').assert;
var Vector = require('../js/vectorClass.js');

describe('Vector Class', function(){
  it('Basic Tests', function(){
    var a = new Vector([1,2]);
    var b = new Vector([3,4]);

    assert.equal( a.add(b).equals(new Vector([4,6])), true );
  });
});
