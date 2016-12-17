// https://www.codewars.com/kata/number-zoo-patrol/train/javascript

/*
You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out,
so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of
how many numbers the zoo has in total.

Write the function findNumber(array) that takes an array of numbers.
The numbers will be unsorted values between 1 and one more than the length of the array.
No values will be repeated within the array. Return the number that is missing.

Examples:

findNumber( [1,3] ) => 2

findNumber( [2,3,4] ) => 1

findNumber( [13,11,10,3,2,1,4,5,6,9,7,8] ) => 12
*/

function findNumber(array) {
  array.sort(function(a,b){ return a - b;});

  if( array[0] !== 1 ) {
    return 1;
  }

  for( var i = 1; i < array.length; i++ ) {
    if( array[i] !== array[i-1] + 1 )
      return array[i-1] + 1;
  }
};

module.exports = findNumber;

// best practice
function findNumber(arr) {
  for(var i = 1; i < arr.length+1; i+=1){
    if(arr.indexOf(i) < 0) return i;
  }
}
