// https://www.codewars.com/kata/javascript-namespacing/train/javascript

/*
Define a class named MyClass inside a namespace MyNamespace.
The class constructor should accept a single string argument.
It should also have a function named sayHello that returns the string passed into the constructor.

Example:

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'
The interesting part is that MyClass should only be accessible via the namespace
and should not define any extra global variables.
Code should not redefine an existing namespace,
but should also function if the namespace is not previously defined.
*/

var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function (str) {
  this.say = str;
  this.sayHello = function(){
    return this.say;
  };
};


module.exports = MyNamespace;

// best practice
var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function(phrase){
  this.phrase = phrase;
};

MyNamespace.MyClass.prototype.sayHello = function(){
  return this.phrase;
};
