// https://www.codewars.com/kata/fibonacci-generator

/*
Description:

Create a function generator genfib() that returns a function fib() which always r
eturns the next fibonacci number on each invocation (and returns 0 when being called the first time).

Example:

var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2
*/

function genfib(){
  var arr = [0, 1];
  var idx = -1;

  return function fib(){
    arr.push( arr[arr.length-1] + arr[arr.length-2] );
    return arr[++idx];
  }
};

module.exports = genfib;

// best practice
function genfib(){
  var a = 1, b = 0;
  return function fib(){
    var c = a + b;
    a = b;
    b = c;
    return a;
  }
}

// clever
function genfib(){
  var fibs = [0,1];
  return function fib(){
    fibs.push(fibs[0]+fibs[1]);
    return fibs.shift();
  }
}
