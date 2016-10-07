// https://www.codewars.com/kata/odd-slash-even-number-of-divisors/train/javascript
/*
Given an integer n return 'odd' if the number of its divisors is odd. Otherwise return 'even'.

Examples:

All prime numbers have exactly two divisors (hence 'even')

For n=12 the divisors are [1,2,3,4,6,12] – 'even'

For n=4 the divisors are [1,2,4] – 'odd'

*/

function oddity(n) {

  var i = 1;
  var ans = 0;

  while( i < Math.sqrt(n) ) {
    if( n % i == 0 ) {
        ans += 2;
    }

    i++;
  }

  if( Math.pow(i, 2) == n ) {
      ans += 1;
  }

  return ans % 2 == 0 ? 'even' : 'odd';

};

console.log(oddity(1),'odd');  // 1
console.log(oddity(5),'even'); // 1,5
console.log(oddity(16),'odd'); // 1,2,4,8,16
console.log(oddity(1472685468), 'even');
console.log(oddity(2819294308),'even');
console.log(oddity(5542578124), 'even');

// best practice
function oddity(n){
  console.log(Math.sqrt(n));
  return Math.sqrt(n) % 1 ? "even" : "odd";
};
