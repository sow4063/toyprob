// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb

/*
Description:

Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

The returned object should include the first instance of each property seen on any parameter object,
and any other instance of that property should be ignored.

Also, if any parameter is not an object, it should be ignored.
You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}
*/
function isObject(val) {
    return val instanceof Object;
};

var extend = function() {

  var outobj = {};

  for( var i = 0; i < arguments.length; i++ ) {

    if( !isObject(arguments[i]) ) {
      continue;
    }

    var inobj = arguments[i];

    for( var key in inobj ) {
      if( key === undefined ) {
        key = '';
        value = undefined;
      }

      if( !Object.keys(outobj).includes(key) )
        outobj[key] = inobj[key];
    }

  }

  return outobj;
};

module.exports = extend;

// best practice
var extend = function() {
  var combined = {};
  Array.prototype.slice.call(arguments).filter(isObject).reduceRight(function(i,obj){
    Object.keys(obj).forEach(function(k){combined[k] = obj[k]})
  },null);
  return combined;
}
