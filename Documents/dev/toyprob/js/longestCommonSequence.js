// https://www.codewars.com/kata/longest-common-subsequence/train/javascript

/*
Description:

Write a function called LCS that accepts two sequences, and returns the longest subsequence common to the passed in sequences.

Subsequence

A subsequence is different from a substring.
The terms of a subsequence need not be consecutive terms of the original sequence.

Example subsequence

Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc"

LCS examples

LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"
Notes

Both arguments will be strings
Return value must be a string
Return an empty string if there exists no common subsequence
Both arguments will have one or more characters (in JavaScript)
All tests will only have a single longest common subsequence.
Don't worry about cases such as LCS( "1234", "3412" ),
which would have two possible longest common subsequences: "12" and "34".
Note that the Haskell variant will use randomized testing,
but any longest common subsequence will be valid.

Tips

Wikipedia has an explanation of the two properties that
can be used to solve the problem:
*/

function LCS(a, b) {
  var aSub = a.substr( 0, a.length - 1 );
  var bSub = b.substr( 0, b.length - 1 );

  if( a.length === 0 || b.length === 0 ) {
    return '';
  }
  else if( a.charAt( a.length - 1 ) === b.charAt( b.length - 1 ) ) {
    return LCS( aSub, bSub ) + a.charAt( a.length - 1 );
  }
  else {
    var x = LCS( a, bSub );
    var y = LCS( aSub, b );

    return ( x.length > y.length ) ? x : y;
  }
};

console.log( lcs3("abc", "ac"), " == ", "ac" );
console.log( lcs3("a", "a"), " == ", "a" );
console.log( lcs3("a", "b"), " == ", "" );
console.log( lcs3("abcdef", "abc"), " == ", "abc" );
console.log( lcs3("anothertest", "notatest"), " == ", "nottest" );
console.log( lcs3("abcdefghijklmnopq", "apcdefghijklmnobq"), " == ", "acdefghijklmnoq" );

// best practice
function LCS( xstr, ystr ) {
  if( xstr == '' || ystr == '' ) return '';

  var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
      yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );

  if( xp == yp )
    return xp + LCS( xrest, yrest );

  var lcs1 = LCS( xstr, yrest ),
      lcs2 = LCS( xrest, ystr );

  return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
}
