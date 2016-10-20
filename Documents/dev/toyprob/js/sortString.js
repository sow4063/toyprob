// Write a function to sort a given string into alphabetical order
// https://www.codewars.com/kata/write-a-function-to-sort-a-given-string-into-alphabetical-order/train/javascript

/*
Task :

Write a function to sort a given string into alphabetical order.
Upper case and lower case should be sorted together (upper case first) and
other characters should be sorted to the end, numbers first in ascending order,
followed by punctuation. Spaces should be ignored.

For example:

Input string:

The cat sat on the mat

Output:

aaaceehhmnosTtttt

Input string:

“Happy 21st Birthday!”

Output:

aaBdHhipprsttyy12!””

*/

function compare(a,b) {

  c = a.toUpperCase();
  d = b.toUpperCase();

  if( c == d ) {
    if( a.charCodeAt(0) > b.charCodeAt(0) ) {
      return 1;
    }
    else if( a.charCodeAt(0) < b.charCodeAt(0) ) {
      return -1;
    }
    return 0;
  }
  else if( c > d ) return 1;
  else return -1;

};

function sort(str) {

  if( !str )
    return "";

  var strings = str.replace(/\s/g, '').split("").join("");

  var chars = strings.match(/[a-zA-Z]/gi);
  var specials = strings.match(/[^a-zA-Z0-9]/gi);
  var nums  = strings.match(/[0-9]/gi);

  var result = chars.sort(compare).join("");
  if( nums ) result += nums.sort(compare).join("");
  if( specials) result += specials.sort(compare).join("");

  return result;

};

// best practice
function sort(str) {
  const CHARS = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!?’\'()*+,.…:"@#$%&^-;<>=[]_{}~“”£ '
  return str.split('').sort((a,b) => CHARS.indexOf(a) - CHARS.indexOf(b)).join('').trim()
}
