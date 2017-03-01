// https://www.codewars.com/kata/first-non-repeating-letter/train/javascript

/*
Write a function named firstNonRepeatingCharacter that takes a string input, and
returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't',
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character,
but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").
*/

function firstNonRepeatingLetter(s) {
  if( s.length === 1 ) return s;
  var found = false;
  for( var i = 0; i < s.length; i++ ) {
    found = false;
    for( var j = 0; j < s.length; j++ ) {
      if( i !== j && s[i].toLowerCase() === s[j].toLowerCase() ) {
        found = true;
        break;
      }
    }

    if( !found ) return s[i];
  }

  return '';
};

module.exports = firstNonRepeatingLetter;

// best practice
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
