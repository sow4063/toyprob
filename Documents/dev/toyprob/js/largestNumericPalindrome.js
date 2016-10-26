// https://www.codewars.com/kata/largest-numeric-palindrome/train/javascript

/*
Create a function that finds the largest palindromic number made from the product of
any amount of at least 2 numeric arguments.

Example:

numericPalindrome(937,113) === 81518
As 937 * 113 = 105881 and the largest palindromic number that can be arranged from this result is: 81518.

Further example:

numericPalindrome(57,62,23)==82128
Because you try all possible combinations (57*62,57*23,62*23 and 57*62*23) and
find that the product 81282 allow to create the largest palindrome
(then again: notice that you are must not necessarily use all the digits of a product,
as it was by chance in this case).

Note: single digits numbers are still considered (edge) palindromes, so for:

Test.assert_equals(numeric_palindrome(15, 125, 8),8)
You try all possible combinations (15*125,15*8,125*8,15*125*8) and
find that 1875 generates the largest palindrome number, namely 8.

Notes and tips

This kata is quite demanding, as you will need to manage all possible combinations to get products,
then use all or some of the digits of each product to get the largest palindrome:
as you can easily guess, the computing time can easily grow exponentially,
so you will need to work on optimization to be able to make it in the alloted time.

Dealing with 1s and 0s when passed as parameters in a smart way could help. A lot.
*/

function unique(value, index, self) {
  return self.indexOf(value) === index;
};

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
};

function permute( arr ) {
  var permutations = [];

  if( arr.length === 1 ) {
    return [ arr ];
  }

  for( var i = 0; i <  arr.length; i++ ) {
    var subPerms = permute( arr.slice(0, i).concat( arr.slice( i + 1 ) ) );
    for( var j = 0; j < subPerms.length; j++ ) {
      subPerms[j].unshift( arr[i] );
      permutations.push( subPerms[j] );
    }
  }

  return permutations;
};


var numericPalindrome = function() {

  // find the all combinations
  var args = Array.prototype.slice.call(arguments);
  var combi = [];

  for( var i = 0; i < args.length; i++ ) {
    for( var j = i+1; j < args.length; j++ ) {
      combi.push( args[i] * args[j] );
    }
  }

  combi.push( args.reduce(function(a,b) { return a*b; }) );

  combi = combi.filter( unique );

  console.log( 'args = ', args,'combi = ', combi );

  // find palindrome
  let answer = [];

  combi.forEach( function(n) {
    var arr = `${n}`.split('');
    var permus = permute(arr);

    for( var i = 0; i < permus.length; i++ ) {
      var str = parseInt(permus[i].join('')).toString();
      //console.log(str);
      if( str === str.split('').reverse().join('')  )
        answer.push( parseInt( str ));
    }
  });

  console.log(answer);

  let max = Math.max(...answer);

  return max;
};

module.exports = numericPalindrome;
