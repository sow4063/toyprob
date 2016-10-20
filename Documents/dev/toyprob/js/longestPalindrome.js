// https://www.codewars.com/kata/longest-palindrome/train/javascript

/*
Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”,
the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:

"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

function longestPalindrome( str ) {

  if( str.length <= 1 )
    return str.length;

  var max = 0;

  if( str == str.split("").reverse().join("") )
    return str.length;

  var sliced = "";
  var reversed = "";

  for( var i = 0; i < str.length; i++ ) {

    for( var j = 1; j < str.length; j++ ) {

      var arr = str.split("").slice( i, j + 1 );

      sliced = arr.join("");
      reversed = arr.reverse().join("");

      if( sliced == reversed ) {
        if( max < reversed.length )
          max = reversed.length;
      }

    }

  }

  return max;
};

module.exports = longestPalindrome;

// best practice
var longestPalindrome = function(s) {
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
};
