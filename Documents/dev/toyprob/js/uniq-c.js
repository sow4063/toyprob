// https://www.codewars.com/kata/uniq-c-unix-style/train/javascript

/*
Implement the uniq_c() function which behaves like the 'uniq -c' command in UNIX.
It takes as input an array and returns an array in which all duplicate elements
following each other have been reduced to one instance together with the number of times
a duplicate elements occurred in the original array.

Example:

var input = ['a','a','b','b','c','a','b','c'];
uniq_c(input); // -> returns [['a',2],['b',2],['c',1],['a',1],['b',1],['c',1]]
*/

function uniq_c(a){
  if( a === undefined) return [];
  if( a.length === 1 ) {
    return [[a[0],1]];
  }

  var ans = [];
  var count = 1;

  for( var i = 1; i < a.length; i++ ) {
    if( a[i] !== a[i-1] ) {
      ans.push( [a[i-1], count] );

      if( i === a.length - 1 ) {
        ans.push( [a[i], 1] );
      }

      count = 1;
    }
    else {
      count++;

      if( i === a.length - 1 ) {
        ans.push( [a[i], count]);
      }
    }
  }

  return ans;
};

module.exports = uniq_c;

// best practice
function uniq_c(a){
  return !a.length ? [] : a.reduce(function (acc, x) {
    var last = acc[acc.length - 1];
    if (last[0] == x) { last[1]++; } else { acc.push([x, 1]); }
    return acc;
  }, [[a[0], 0]]);
}
