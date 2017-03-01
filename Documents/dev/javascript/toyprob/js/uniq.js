// https://www.codewars.com/kata/uniq-unix-style/train/javascript

/*
Implement the uniq() function which behaves like the uniq command in UNIX.
It takes as input an array and returns an array in which all duplicate elements following each other have been reduced to one instance.

Example:

var input = ['a','a','b','b','c','a','b','c'];
uniq(input); // -> returns ['a','b','c','a','b','c']
*/

function uniq(a) {
  return a.filter(function(v,i){
    return v !== a[i+1] || v === undefined;
  });
};

module.exports = uniq;
