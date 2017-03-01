// https://www.codewars.com/kata/525d8c20915a399b5600087b/solutions/javascript

/*
Description:

In this kata you have to extend the dictionary with a method,
that returns a list of words matching a pattern.
This pattern may contain letters (lowercase) and placeholders ("?").
A placeholder stands for exactly one arbitrary letter.

Example:

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
fruits.getMatchingWords('lemon');     // must return []
fruits.getMatchingWords('cherr??');   // must return []
fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']

Additional Notes:

the words and patterns are all lowercase
the order of the returned words doesn't matter
*/

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  return this.words.filter(function(v){
    if( pattern.length > v.length ) return false;
    for( var i = 0; i < v.length; i++ ) {
      if( pattern[i] !== '?' && pattern[i] !== v[i] ) {
        return false;
      }
    }

    return true;
  });
};

module.exports = Dictionary;

// best practice
function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  pattern = new RegExp('^'+pattern.replace(/\?/g, '.')+'$');
  return this.words.filter(pattern.test.bind(pattern));
}
