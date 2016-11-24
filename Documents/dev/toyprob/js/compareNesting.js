// https://www.codewars.com/kata/nesting-structure-comparison

/*
Description:

Complete the method (or function in Python) to return true when its argument is an array that
has the same nesting structure as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

 // should return false
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );

For your convenience, there is already a function 'isArray(o)' declared in the JS version that
returns true if its argument is an array, false otherwise.
*/

Array.prototype.sameStructureAs = function (other) {

  var regExp = /[\'+\[+\']/gi;
  var strThis = JSON.stringify(this);
  strThis = strThis.replace(/[0-9]/g, '#');
  strThis = strThis.replace('"["', '#');
  strThis = strThis.replace('"]"', '#');

  var strOther = JSON.stringify(other);
  strOther = strOther.replace(/[0-9]/g, '#');
  strOther = strOther.replace('"["', '#');
  strOther = strOther.replace('"]"', '#');

  if( strThis.length != strOther.length )
    return false;

  for( var i = 0; i < strThis.length; i++ ) {
    if( strThis[i] !== strOther[i] )
      return false;
  }

  return true;
};

module.exports = Array.prototype.sameStructureAs;

// best practice
Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(el, i){
      return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
    }) : false;
};
