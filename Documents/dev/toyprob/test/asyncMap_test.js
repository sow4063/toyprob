var assert = require('chai').assert;
var asyncMap = require('../js/asyncMap.js');

describe('asyncMap', function(){
  it('Basic Tests', function(){

  	var func1 = function(cb){
      setTimeout(function(){
        return cb('one');
      }, 200);
    };

    var func2 = function(cb){
      setTimeout(function(){
        return cb('two');
      }, 100);
    };

    var func3 = function(results){
      return results;
    };

    var cb = function(str){
      return str;
    }

    var result = [];
    asyncMap([], cb)
      .then(function(v){
        result.push(cb(v));
      })
      .then(function(){
        assert.deepEqual( result, ['one', 'two'] );
      });


  });
});

 
 
