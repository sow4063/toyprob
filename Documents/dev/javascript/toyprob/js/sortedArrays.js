// https://www.codewars.com/kata/sorted-arrays/train/javascript

/*
Given any number of arrays each sorted in ascending order,
find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
*/

function compare(a,b) {
  return a - b;
};

function nthSmallest(/* ...arrays, n */) {
  var nth = parseInt(arguments[arguments.length -1]);
  var len = arguments.length -1;

  var arr = [];
  for( var i = 0; i < len; i++ ) {
    arr = arr.concat(arguments[i]);
  }

  return arr.sort(compare)[nth-1];
};

console.log( nthSmallest([1,5], [2], [4,8,9], 4), 5 );

// best practice
function nthSmallest(args, n) {
  var args = [...arguments];
  var n = args.pop();
  return [].concat.apply([],args).sort(function(a,b){return a - b})[n-1];
}
