// https://www.codewars.com/kata/compose-functions-t-combinator/train/javascript

/*
Let's make a function called compose that accepts a value as a parameter,
as well as any number of functions as additional parameters.

The function will return the value that results from the first parameter being
used as a parameter for all of the accepted function parameters in turn. So:

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

compose(5, doubleTheValue) // should === 10
compose(5, doubleTheValue, addOneToTheValue) // should === 11
*/

var compose = function(value) {
  var args = Array.prototype.slice.call(arguments);
  var result = args[0];

  for( var i = 1; i < args.length; i++ ) {
    result = args[i].call(null, result);
  }

  return result;
};

module.exports = compose;

// best practice
var compose = function(value) {
  for(var i = 1 ; i< arguments.length ; i++) {
    value = arguments[i](value);
  }
  return value;
}
