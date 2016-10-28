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

//
// Array.prototype.move = function(from, to) {
//     this.splice(to, 0, this.splice(from, 1)[0]);
//     return this;
// };

function unique(value, index, self) {
  return self.indexOf(value) === index;
};

function perms(arr) {

  if( !Array.isArray(arr) ) {
    throw new TypeError("input data must be an Array");
  }

  arr = arr.slice();

  var permutations = [];
  var stack = [];

  function permute() {

    if( arr.length === 0 ) {
      permutations.push( stack.slice() );
    }

    for( var i = 0; i < arr.length; i++ ) {
      var x = arr.splice(i, 1);
      stack.push(x);

      permute();

      stack.pop();
      arr.splice(i, 0, x);
    }
  }

  permute();

  return permutations;
};

function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
};

function permutations(array) {
  //var input = string.split('');
  var results = perms(array);

  for( var i = 0; i < results.length; i++ ) {
    results[i] = flatten( results[i] ).join('');
  }

  return results.filter( unique );

};

var numericPalindrome = function() {

  // find the all combinations
  var args = Array.prototype.slice.call(arguments);
  var combi = [];

  var products = args.reduce( function(a,b) { return a * (b===0?1:b); } );

  combi.push( products );

  for( var i = 0; i < args.length; i++ ) {
    for( var j = i+1; j < args.length; j++ ) {
      combi.push( args[i] * args[j] );
    }
  }

  combi = combi.filter( unique );
  combi.sort( function(a,b){return b-a;} );

  //console.log( 'args = ', args,'combi = ', combi );

  // find palindrome
  let answer = [];
  var largest = 1;

  combi.forEach( function(n) {
  //for( var k = 0; k < combi.length; k++ ) {

    var numbers = [...n + ""].map(v => +v);
    //var numbers = [ combi[k] + ""].map(v => +v);
    var nums = [];

    for( var i = 0; i < Math.pow( 2, numbers.length ); i++ ) {

      var bin = (i).toString(2);
      var set = [];

      bin = new Array( ( numbers.length - bin.length ) + 1 ).join("0") + bin;

      for( var j = 0; j < bin.length; j++ ) {
        if( bin[j] === "1" ) {
            set.push( numbers[j] );
        }
      }

      nums.push(set);
    }

    // find the palindrome.
    nums = nums.slice(1);

    nums.sort(function(a,b){return b.length - a.length;});
    //console.log(nums);

    for( var i = 0; i < nums.length; i++ ) {

      var permus = permutations( nums[i] );
      permus.sort( function(a,b){return b.length - a.length;} );
      //console.log(permus);

      for( var j = 0; j < permus.length; j++ ) {
        //console.log(permus[j]);
        var str = parseInt( permus[j] ).toString();

        if( str === str.split('').reverse().join('')  ) {
          //console.log(str);

          // if( largest < parseInt( str ) )
          //   largest = parseInt( str );
          //
          // if( largest.toString().length > str.length ) {
          //   console.log('the largest is = ', largest);
          //   return largest;
          // }

          answer.push( parseInt( str ) );
        }

      }

    }

  //}
  } );

  let max = Math.max(...answer);

  return max;
};


module.exports = numericPalindrome;
