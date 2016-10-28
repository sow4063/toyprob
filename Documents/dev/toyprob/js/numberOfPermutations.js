// https://www.codewars.com/kata/number-of-permutations-without-repetitions

/*
Write a function that takes a number or a string and gives back the number of
permutations without repetitions that can generated using all its element.;
more on permutations here(https://en.wikipedia.org/wiki/Permutation).

For example, starting with:

1
45
115
"abc"

You could respectively generate:

1
45,54
115,151,511
"abc","acb","bac","bca","cab","cba"

So you should have, in turn:

perms(1)==1
perms(45)==2
perms(115)==3
perms("abc")==6

*/

function unique(value, index, self) {
  return self.indexOf(value) === index;
};

function permutations(arr) {

  arr = arr.slice();

  var permutations = [];
  var stack = [];

  function makePerm() {

    if( arr.length == 0 ) {
      permutations.push( stack.slice() );
    }

    for( var i = 0; i < arr.length; i++ ) {
      var x = arr.splice(i, 1);
      stack.push(x);

      makePerm();

      stack.pop();
      arr.splice(i, 0, x);
    }
  }

  makePerm();

  return permutations;
};

function perms(element) {
  var input = element.toString().split('');
  var results = permutations(input);

  for( var i = 0; i < results.length; i++ ) {
    results[i] = results[i].join('');
  }

  return results.filter( unique ).length;

};


module.exports = perms;
