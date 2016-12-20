var assert = require('chai').assert;
var pipe = require('../js/pipeFunctions.js');

describe('Concatening Functions', function(){
  it('Basic Tests', function(){
    var addOne = function(e) {
        return e + 1;
    };

    var square = function(e) {
        return e * e;
    };

    var result = [1,2,3,4,5].map(addOne.pipe(square));
    assert.deepEqual( result,  [4,9,16,25,36] );
  });
});
