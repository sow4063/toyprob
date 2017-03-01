// https://www.codewars.com/kata/flatten/train/javascript

/*
For this exercise you will create a global flatten method.
The method takes in any number of arguments and flattens them into a single array.
If any of the arguments passed in are an array then
the individual objects within the array will be flattened so that they exist
at the same level as the other arguments.
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and
what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
*/

Array.prototype.flat = function() {
  return this.reduce(function(p,v) {
    var nested = [].concat(v).some(Array.isArray);
    return p.concat( nested ? v.flat() : v);
  },[]);
};

function flatten() {
  return Array.prototype.slice.call(arguments).flat();
};

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]), [1, 2, 3, 4, 5, 6, 7] );
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]), ['a', 'b', 2, 3, null, 4, 'c'] );

// best practice
function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
};
