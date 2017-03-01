// https://www.codewars.com/kata/where-my-anagrams-at/train/javascript

/*
What is an anagram? Well, two words are anagrams of each other
if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function order(a, b) {
  return a > b;
};

function anagrams(word, words) {
  word = word.split('').sort(order).join('');

  return words.filter(function(v){
    return word === v.split('').sort(order).join('');
  });
};

module.exports = anagrams;

// best practice
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}
