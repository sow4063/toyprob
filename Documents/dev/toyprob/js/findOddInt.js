// https://www.codewars.com/kata/54da5a58ea159efa38000836

/*
Description:

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(arr) {
  var obj = {};

  arr.forEach(function(val){
    obj[val] ? obj[val]++ : obj[val] = 1;
  });

  for( var key in obj ) {
    if( obj[key] % 2 === 1 )
      return parseInt(key);
  }
  return 0;
};

module.exports = findOdd;

// best practice
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
