// https://www.codewars.com/kata/nth-root-of-a-number-redux/train/javascript

/*
Task

Given two numbers x and n, calculate the nth root of x, e.g. r such that r^n = x.
However, you're working with some kind of legacy API that doesn't contain a
helpful function for this task (see end of the description).

Examples

root(4, 2);   // 2
root(8, 3);   // 2
root(256, 4); // 4
root(9, 2);   // 3
Disabled functions

Spoilers ahead!
The following description contains hints on another kata.
Make sure that you've solved the previous part of the series before you read the next part.
The power function of your language (e.g. Math.pow in JavaScript, ** in Haskell) has been disabled.
Good luck.
*/

function power(x,n) {
  if(n === 0) return 1;
  if(n === -1) return 1/x;
  if(n === 1) return x;
  return Math.exp(n*Math.log(x));
};

function root(n, k) {
  x = power(n, (1.0 / k) );
  y = Number(x);
  return y != x ? y + 1 : y;
};

console.log(root(4, 2), 2);
console.log(root(8, 3), 2);
console.log(root(16,2), 4);
console.log(root(27,3), 3);
console.log(root(1e10,10), 10);
console.log(root(6256875898678471000, 14.556587443597254), 1.9555155181909e+1);

// best practice
var root = function(x, nth){
  return Math.exp( Math.log(x) / nth );
}

// simiar kata
// https://www.codewars.com/kata/sum-of-digits-slash-digital-root
