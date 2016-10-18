// https://www.codewars.com/kata/find-the-parity-outlier/train/javascript

/*
You are given an array (which will have a length of at least 3,
but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of
even integers except for a single integer N. Write a method that
takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/

function findOutlier(integers) {

  var even = [];
  var odd = [];

  for( var val of integers ) {
    if( val % 2 == 0 )
      even.push( val );
    else
      odd.push(val);
  }
  return even.length < odd.length ? even[0]: odd[0];
};

console.log( findOutlier( [4,2,1,6,8] ) );
console.log( findOutlier( [4,3,5,9,7] ) );
console.log( findOutlier( [164,35,25,19,57] ) );
console.log( findOutlier( [2,4,0,100,4,11,2602,36] ) );

// best practice
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
