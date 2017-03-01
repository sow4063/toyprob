// https://www.codewars.com/kata/sum-of-many-ints/train/javascript

/*
Description:

Write this function

f(n,m) = sum(i=1 to n, i%m)

for i from 1 to n, do i % m and return the sum

f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)

You'll need to get a little clever with performance, since n can be a very large number
*/

function f(n, m) {
  var remainder = n % m;
  return (m - 1) * m / 2 * Math.floor(n / m) + remainder * (remainder + 1 ) / 2;
};

module.exports = f

// best practice
f = function(n, m) {
  sum1toN = function(x) {
    return x * (x + 1) / 2;
  };

  return (sum1toN(m - 1)) * (Math.floor(n / m)) + sum1toN(n % m);
};
