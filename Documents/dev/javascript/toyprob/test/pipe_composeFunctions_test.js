var assert = require('chai').assert;
var pipeline = require('../js/pipe_composeFunctions.js');
var compose = require('../js/pipe_composeFunctions.js');

describe('Pipelining and composing functions', function(){
  it('Basic Tests : pipeline', function(){
    assert.equal( pipeline(), void 0 );
    sert.equal( pipeline(42), 42 );
    assert.equal( pipeline(42, function(n) { return -n; }), -42 );
  });

  it('Basic Tests : compose', function(){
    var greet    = function(name){ return "hi: " + name; };
    var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
    var welcome = compose(greet, exclaim);

    assert.equal( welcome('moe'), 'hi: MOE!' );
  });
});
