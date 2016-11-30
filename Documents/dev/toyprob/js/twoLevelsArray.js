// https://www.codewars.com/kata/two-levels-arrays

/*
Description:

You have to write an algorithm that flatten an arrays structure to 2 levels.
It means that each array under the second level will be merge to its parent.
Only two levels are kept.

Empty arrays are ignored.

var array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
flattenTwoLevels(array); // should return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]

flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]) // should return [1,[2,3,4,5]]
*/

function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
};

function flattenTwoLevels(array) {
  return array.map( function(v){
    if( Array.isArray(v) )
      return flatten(v);
    else {
      return v;
    }
  } );
};

module.exports = flattenTwoLevels;

// best practice
function flattenTwoLevels(array) {
  return array.reduce(function(a, b) {
    return a.push(Array.isArray(b) ? flatten(b) : b), a;
  }, []);
}

function flatten(array) {
  return array.reduce(function(a, b) {
    return a.concat(Array.isArray(b) ? flatten.call(null, b) : b);
  }, []);
}
