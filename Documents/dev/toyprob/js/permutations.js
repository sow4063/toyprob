// https://www.codewars.com/kata/permutations/train/javascript

/*
In this kata you have to create all permutations of an input string and remove duplicates, if present.
This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

// function permute(nums, matrix) {
//   if( nums.length == 0 )
//     return matrix;
//
//   let numToInsert = nums.shift();
//   let newMatrix = [];
//
//   matrix.forEach( (array,i) => {
//     if( i % 2 === 0 ) {
//       for( let i = array.length; i >= 0; --i ) {
//         let copiedArray = array.slice();
//         copiedArray.splice(i,0,numToInsert);
//         newMatrix.push(copiedArray);
//       }
//     }
//     else {
//       for( let i = 0; i <= array.length; ++i ) {
//         let copiedArray = array.slice();
//         copiedArray.splice(i,0,numToInsert);
//         newMatrix.push(copiedArray);
//       }
//     }
//   });
//
//   return permute( nums, newMatrix );
// };
//
// function permutations(string) {
//   return permute(string.split(''), [[]]);
// };
function perms(data) {
    if( !Array.isArray(data) ) {
      throw new TypeError("input data must be an Array");
    }

    data = data.slice();  // make a copy
    var permutations = [];
    var stack = [];

    function doPerm() {

      if( data.length == 0 ) {
        permutations.push( stack.slice() );
      }

      for( var i = 0; i < data.length; i++ ) {
        var x = data.splice(i, 1);
        stack.push(x);

        doPerm();

        stack.pop();
        data.splice(i, 0, x);
      }
    }

    doPerm();
    
    return permutations;
};

function unique(value, index, self) {
  return self.indexOf(value) === index;
};

function permutations(string) {
  var input = string.split('');
  var result = perms(input);

  for( var i = 0; i < result.length; i++ ) {
      result[i] = result[i].join('');
  }

  return result.filter( unique );;

};

module.exports = permutations;
