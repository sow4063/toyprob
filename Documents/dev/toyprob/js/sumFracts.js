// https://www.codewars.com/kata/irreducible-sum-of-rationals/train/javascript

/*
You will have a list of rationals in the form

m = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ] or
m = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]

where all numbers are positive integers.
You have to produce the sum N/D of these rationals in an irreducible form
ie N and D have only 1 for divisor.

The result will be written in the form

[N, D] in Ruby/Python/Clojure/JS/CS/PHP
Just "N D" in Haskell or Some "N D" in F#
"[N, D]" in Java, CSharp, TS
{N, D} in C++
{N, D} in Elixir
Example:

[ [1, 2], [1, 3], [1, 4] ] ---->
[13, 12] or:
Just "13 12" (Haskell) or:
"[13, 12]" (Java, CSharp, TS) or:
{13, 12} (C++, Elixir)

Notes:

If m is [] return
  nil/None/null (Ruby/Elixir/Clojure/Python/JS/CS/TS/Java/CSharp/PHP)
  Nothing (Haskell) None (F#)
  {0, 1} (C++)

If D divise N return:
  N/D as an integer: n (Ruby/Elixir/Clojure/Python/JS/CS/PHP)
  Just "n" (Haskell),
  Some "n" (Haskell),
  "n" (Java, CSharp, TS),
  {n, 1} (C++).
*/

function gcf(a, b) {
	return ( b == 0 ) ? (a):( gcf(b, a % b) );
};

function lcm(a, b) {
	return ( a / gcf(a,b) ) * b;
};

function lcm_nums(ar) {
	if( ar.length > 1 ) {
		ar.push( lcm( ar.shift() , ar.shift() ) );
		return lcm_nums( ar );
	}
  else {
		return ar[0];
	}
};

var gcd = function(a, b) {
  if ( ! b) {
     return a;
  }

  return gcd(b, a % b);
};

function sumFracts(l) {

  if( l.length == 0 ) return null;

  var arr = [];
  for(var i = 0; i < l.length; i++ ) {
    arr.push(l[i][1]);
  }

  // least common multiple
  var lcm = lcm_nums(arr);

  var sum = 0;
  for(var i = 0; i < l.length; i++ ) {
    sum += lcm / l[i][1] * l[i][0];
  }

  // greatest common divisor
  var gcd_num = gcd(sum, lcm);

  return sum % lcm == 0 ? sum / lcm : [sum / gcd_num, lcm / gcd_num];
};

console.log(sumFracts([[1, 2], [1, 3], [1, 4]]), [13, 12]);
console.log(sumFracts([[1, 3], [5, 3]]), 2);
console.log(sumFracts([[12, 3], [15, 3]]), 9);
console.log(sumFracts([[2, 7], [1, 3], [1, 12]]), [59, 84]);

// best practice
const gcd = (a, b) => b ? gcd(b, a % b) : a;

const sumFracts = l => {
  if (!l.length) return null;

  var [n, d] = l.reduce(([a, x], [b, y]) => [a*y + b*x, x*y]);
  var g = gcd(n, d);

  return g === d ? n / d : [n / g, d / g];
}
