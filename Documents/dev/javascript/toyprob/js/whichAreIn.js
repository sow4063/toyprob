// https://www.codewars.com/kata/which-are-in/train/javascript

/*
Given two arrays of strings a1 and a2 return a sorted array r in
lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:

a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:

a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:

Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
Beware: r must be without duplicates.
*/

function inArray(array1,array2){
  var arr = [];
  var str = array2.join('#');

  for(var val of array1 ) {
    if( str.indexOf(val) != -1 ) {
      arr.push(val);
    }
  }
  return arr.sort();
};

// best practices
function inArray2(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
};

function inArray3(array1,array2){
  var fullString = array2.join(' ');
  return array1.filter(function(v){
    return fullString.indexOf(v) !== -1;
  }).sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["xyz", "live", "strong"];

console.log( inArray3(a1, a2), ["live", "strong"]);

a1 = ["live", "strong", "arp"]
console.log( inArray3(a1, a2), ["arp", "live", "strong"]);

a1 = ["tarp", "mice", "bull"]
console.log( inArray3(a1, a2), []);

a1 = [ 'live', 'strong', , 'lyal', 'lysh', 'arp' ];
a2 = [ 'lively', 'alive', 'harp', 'sharp', 'armstrong' ];

console.log( inArray3(a1, a2), ["arp","live","strong"]);
