// https://www.codewars.com/kata/complete-fibonacci-series/train/javascript

/*
The function 'fibonacci' should return an array of fibonacci numbers.
The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4); // should return [0,1,1,2]
fibonacci(-1); // should return []
*/

function fibonacci(n) {

  n = n > 0 ?  n : 0;
  var arr = [0, 1];
  while( arr.length < n ) {
    arr.push( arr[ arr.length - 2 ] + arr[ arr.length - 1 ] );
  }

  return arr.slice(0, n);
};

module.exports = fibonacci;

// best practice
function fibonacci(n) {
  if (n <= 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0,1];
  var res = fibonacci(n-1);
  res.push(res[res.length-1] + res[res.length-2]);
  return res;
}
