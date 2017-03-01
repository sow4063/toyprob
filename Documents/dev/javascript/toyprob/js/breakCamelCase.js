// https://www.codewars.com/kata/break-camelcase/train/javascript

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution('camelCasing') // => should return 'camel Casing'
*/

var isUpperCase = function(char) {
  return !!/[A-Z]/.exec(char[0]);
};

function solution(string) {
 var result = [];
 var idx = 0;

 for( var i = 0; i < string.length; i++ ) {
   if( isUpperCase( string[i] ) ) {
     result.push( string.substr(idx, i - idx) );
     idx = i;
    }
 }

 result.push( string.substr(idx, string.length ) );

 return result.join(' ');

};

module.exports = solution;

// best practice
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
