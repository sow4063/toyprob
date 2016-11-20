// https://www.codewars.com/kata/valid-braces

/*
Description:

Write a function called validBraces that takes a string of braces, and
determines if the order of the braces is valid. validBraces should return true if the string is valid,
and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters.
Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')',
open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.

For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples:
validBraces( "(){}[]" ) => returns true
validBraces( "(}" ) => returns false
validBraces( "[(])" ) => returns false
validBraces( "([{}])" ) => returns true
*/
function validBraces(braces){
  if( braces.length % 2 === 1 )
    return false;

  var pair = ['()', '[]', '{}'];

  var str = braces.replace('{}', '');
  str = str.replace('()', '');
  str = str.replace('[]', '');

  var arr = str.split('');
  while( arr.length ) {
    var two = arr.shift() + arr.pop();
    if( pair.indexOf(two) === -1 )
      return false;
  };

  return true;
};

module.exports = validBraces;

// best practice
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

// clever
function validBraces(braces){
  while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}
