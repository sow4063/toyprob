// https://www.codewars.com/kata/wrapped-function/train/javascript

/*
Create a function method that allow you to wrap an existing function.
The method signature would look something like this:

Usage Example:

function speak(name){
   return "Hello " + name;
}

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");
*/
var __slice = Array.prototype.slice;

Function.prototype.wrap = function(wrapper) {
  var __method = this;
  return function() {
    return wrapper.apply(this,
        [__method.bind(this)].concat(__slice.call(arguments)));
  }
};

var add = function(a, b) { return a + b; };

add = add.wrap(function(origFunc, a, b) {
  return 2 * origFunc(a, b);
});

// best practice
// extend the Function object to include a wrap instance method
Function.prototype.wrap = function(callback) {
  return callback.bind(this, this);
};
