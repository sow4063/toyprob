// https://www.codewars.com/kata/function-cache/train/javascript

/*
If you are calculating complex things or execute time-consuming API calls,
you sometimes want to cache the results.
In this case we want you to create a function wrapper, which takes a function and
caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) { };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
*/

function cache(func) {
  var memo = {};

  return function() {
    var args = JSON.stringify(arguments);

    if( args in memo ) {
      return memo[args];
    }
    else {
      memo[args] = func.apply(this, arguments);

      return memo[args];
    }
  };

};

module.exports = cache;

// best practice
function cache(func) {
  var calls = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}
