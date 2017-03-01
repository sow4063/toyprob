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

function factorial(n) {
  if( n === 1 )
    return 1;

  return n * factorial(n-1);
};

function perms(element){

  var str = element.toString();
  var obj = {};

  str.split('').forEach(function(v){
    obj[v] ? obj[v]++ : obj[v] = 1;
  });

  var products = 1;
  for( var key in obj ) {
    products *= factorial( parseInt(obj[key]) );
  }

  var count = factorial(str.length);

  return parseInt(count / products);
};

module.exports = perms;

// best practice
function perms(element) {
  var str = '' + element;
  var counts = {};
  var numerator = 1;
  var denominator = 1;

  for (var i = 0; i < str.length; i++) {
    counts[str[i]] = (counts[str[i]] || 0) + 1;

    numerator *= i + 1;
    denominator *= counts[str[i]];
  }

  return numerator / denominator;
}
