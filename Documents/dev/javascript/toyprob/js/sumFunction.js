// https://www.codewars.com/kata/57ab606e53ba3339da0000a2

/*
Write a sum function which will work properly when invoked using either syntax below.

sum(2,3);  // Outputs 5
sum(2)(3); // Outputs 5
*/

function sum(a, b) {
  if( typeof b !== "undefined")
    return a + b;
  else
    return function(c) { return a + c };
};

module.exports = sum;

// best practice
function sum(...a) {
  return a.length === 2 ? a[0] + a[1] : function (x) {
    return a[0] + x;
  };
}
