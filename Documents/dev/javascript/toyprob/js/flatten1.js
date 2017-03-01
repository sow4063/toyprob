// https://www.codewars.com/kata/5250a89b1625e5decd000413/solutions/javascript

/*
Write a function that flattens an Array of Array objects into a flat Array.
Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

var flatten = function (array){
  var arr = [];

  array.forEach( function(v) {
    if( Array.isArray(v) ) {
      for( var i = 0; i < v.length; i++ ) {
        arr.push(v[i]);
      }
    }
    else {
      arr.push(v);
    }
  });

  return arr;

};

module.exports = flatten;

// best practice
var flatten = function (lol){
  return [].concat.apply([],lol);
}

var flatten = function (array){
  return array.reduce(function(a,z) {
    return a.concat(z);
  }, []);
}
