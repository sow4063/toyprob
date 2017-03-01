// https://www.codewars.com/kata/custom-sort-function/train/javascript

/*
Complete the sort function so that it returns the items passed into it in alphanumerical order.
Conveniently enough, the standard array sort method has been disabled for you
so that you are forced to create your own.

Example:

sort([1,3,2]) // should return [1,2,3]
*/

function mergesort(a, b) {
  var r = [];
  while( a.length && b && b.length ){
    if( a[0] < b[0] )
      r.push( a.shift() );
    else
      r.push( b.shift() );
  }

  return r.concat(a).concat(b);
};

function sort(items){
  if( items.length === 1 ) return items;
  var a = sort( items.slice(0, 1) );
  var b = sort( items.slice(1) );
  return mergesort( a, b);
};

module.exports = sort;
