// https://www.codewars.com/kata/pipelining-and-composing-functions/train/javascript

/*
Let's see 2 ways of applying successive functions to an object:

The purpose of this kata is to think of this kind of code

var result = fn4(fn3(fn2(fn1(obj))));
in terms of pipelining or composition of functions.

1) Pipelining

var result = pipeline(obj
                         , fn1
                         , fn2
                         , fn3
                         , fn4);
for instance:

pipeline([1,2,3,4,5,6] // seed
    , rest // first function to apply
    , rest // second function to apply
    , rest // ..
    , rest
    , first);
=> 5

2) Composition: it should return a function that is the composition of a list of functions,
where each function consumes the return value of the function that follows.

var compositionFn = compose(fn4, fn3, fn2, fn1);
var result = compositionFn(obj);
for instance

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = compose(greet, exclaim);
welcome('moe');
=> 'hi: MOE!'
*/

function pipeline(seed /*, args */) {
  var result = seed;
  var args = Array.prototype.slice.call(arguments);

  for(var i = 1; i < args.length; i++) {
    result = args[i](result);
  }
  return result;
};

module.exorts = pipeline;

function compose() {
  var funcs = arguments;

  return function(result) {
    for(var i = funcs.length - 1; i > -1; i--) {
      result = funcs[i].call(this, result);
    }

    return result;
  };
};

module.exports = compose;

// best practice
function pipeline(seed /*, args */) {
  var funcs = Array.prototype.slice.call(arguments, 1);
  return funcs.reduce(function(val, func) {
    return func(val);
  }, seed);
};

function compose() {
  var funcs = Array.prototype.slice.call(arguments, 0);

  return function(seed) {
      return funcs.reduceRight(function(val, func) {
        return func(val);
      }, seed);
  }
};
