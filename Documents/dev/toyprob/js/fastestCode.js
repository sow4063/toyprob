// https://www.codewars.com/kata/5714594d2817ff681c000783

/*
This is the Performance version of coding 3min series.
If your code runs more than 6000ms, please optimize your code or try the simple version

Task:

Give you a number array numbers and a number c.

Find out a pair of numbers(we called them number a and number b) from the array numbers,
let a*b=c, result format is an array [a,b]

The array numbers is a sorted array, value range: -1000...1000

The result will be the first pair of numbers,
for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]

Please see more example at testcases.
Series:

Count animals
A*B=C
*/
// brute force
function findAB(numbers,c) {

  for( var i = 0; i < numbers.length; i++ ) {
    for( var j = i+1; j < numbers.length; j++ ) {
      if( numbers[i] * numbers[j] == c ) {
        return [numbers[i],numbers[j]];
      }
    }
  }

  return null;

};

// fastest code
function findAB(numbers,c) {
  var checked = {};
  var res = [];

  numbers = numbers.filter(function(v){return c % v === 0 || v === 0;});

  for( let i = 0; i < numbers.length; ++i ) {

    let val = c / numbers[i];

    if( checked[val] ) {
      res.push( [ val, numbers[i] ] );
    }
    else if( numbers[i] === 0 && (numbers[0] * numbers[i] === c) ) {
      return [numbers[0], 0];
    }

    checked[numbers[i]] = 1;
  }

  if( res.length >= 1 ) {
    return res.sort(function([a,b],[c,d]){return a-c;})[0];
  }

  return null;

};

console.log(findAB([1,2,3],3), [1,3]);
console.log(findAB([1,2,3],6), [2,3]);
console.log(findAB([1,2,3],7), null);
console.log(findAB([1,2,3,6],6), [1,6]);
console.log(findAB([1,2,3,4,5,6],15), [3,5]);
console.log(findAB([0,0,2],4), null);
console.log(findAB([0,0,2,2],4), [2,2]);
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4],4), [-2,-2]);
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4],0), [-3,0]);
console.log(findAB([-3,-2,-1,0,1,2,3,4],4), [1,4]);

// best practice
_ = require('lodash')

function findAB(numbers,c){
  for(let i = 0, x; i < numbers.length; i++){
    x = numbers[i];
    let j = _.indexOf(numbers, c/x, true);
    if(j > -1 && j != i) return [x,c/x];
  }
  return null
}
