// https://www.codewars.com/kata/split-strings/train/javascript

/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace
the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str){
  var arr = str.split('');

  if( arr.length % 2 != 0 )
    arr.push('_');
  
  var result = [];

  for( var i = 0; i < arr.length; i=i+2 ) {
    result = result.concat(arr.slice(i, i+2).join(''));
  }

  return result;
};

// best practice
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
