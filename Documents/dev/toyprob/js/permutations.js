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
//   var res = permute(string.split(''), [[]]);
//
//   for( var i = 0; i < res.length; i++ ) {
//     res[i] = res[i].join('');
//   }
//
//   return res.filter( unique );
// };


// ES6 generator
// function* permutations(string) {
//
//   for( var cutpoints = 0; cutpoints < (1 << (string.length - 1)); cutpoints++ ) {
//     var result = [];
//     var lastcut = 0;
//
//     for( var i = 0; i < string.length - 1; i++ ) {
//       if( ((1 << i) & cutpoints) !== 0 ) {
//           result.push( string.slice(lastcut, i + 1) );
//           lastcut = i + 1;
//       }
//     }
//     result.push( string.slice(lastcut) );
//     yield result;
//   }
// }
//
// for( var partition of permutations("abcd") ) {
//     console.log(partition);
// }

// passed

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

  function doPerm() {

    if( arr.length == 0 ) {
      permutations.push( stack.slice() );
    }

    for( var i = 0; i < arr.length; i++ ) {
      var x = arr.splice(i, 1);
      stack.push(x);

      doPerm();

      stack.pop();
      arr.splice(i, 0, x);
    }
  }

  doPerm();

  return permutations;
};

function permutations(string) {
  var input = string.split('');
  var results = perms(input);

  for( var i = 0; i < results.length; i++ ) {
    results[i] = results[i].join('');
  }

  return results.filter( unique );

};

module.exports = permutations;

// best practice
function permutations(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}
