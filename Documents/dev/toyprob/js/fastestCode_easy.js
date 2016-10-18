// http://www.codewars.com/kata/coding-3min-a-star-b-equals-c/train/javascript

/*
Coding 3min : A*B=C

This is the simple version of Fastest Code series.
If you need some challenges, please try the Performance version

Task:

Give you a number array numbers and a number c.

Find out a pair of numbers(we called them number a and number b) from the array numbers,
let a*b=c, result format is an array [a,b]

The array numbers is a sorted array, value range: -100...100

The result will be the first pair of numbers, for example,
findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]

Please see more example in testcases.
*/

function findAB(numbers,c) {
  var checked = {};
  var res = [];

  for( var i = 0; i < numbers.length; ++i ) {

    var val = c / numbers[i];

    if( val === -0 ) val = 0;

    if( checked[val] ) {
      res.push( [ val, numbers[i] ] );
    }
    else if( (numbers[0] * numbers[i] === c) && numbers[i] === 0 ) {
      return [numbers[0], 0];
    }

    checked[numbers[i]] = 1;
  }

  if( res.length > 0 ) {
    return res.sort(function([a,b],[c,d]){return a-c;})[0];
  }

  return null;

};

// best practice
function findAB(numbers,c){
  for (var i = 0; i < numbers.length; i++) {
    for (var j = numbers.length; j > 0; j--) {
      if (numbers[i] * numbers[j] == c && i != j) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return null;
}
