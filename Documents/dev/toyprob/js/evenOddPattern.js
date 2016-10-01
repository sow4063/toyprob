// https://www.codewars.com/kata/even-odd-pattern-number-1/train/javascript
/*
Write a function that takes an array/list of numbers and returns a number.

See the examples and try to guess the pattern:

EvenOdd([1,2,6,1,6,3,1,9,6]) => 393
EvenOdd([1,2,3]) => 5
EvenOdd([0,2,3]) => 3
EvenOdd([1,0,3]) => 3
EvenOdd([3,2])   => 6
*/

// odd * even + odd * even + ...

function EvenOdd(arr){
  var num = 0;
  for(var i = 0; i < arr.length; i++ ) {
    if( i % 2 == 0 )
      num += arr[i];
    else
      num *= arr[i];
  }

  return num;
};

console.log(EvenOdd([3,2]),6);
console.log(EvenOdd([1,2,3]),5);
console.log(EvenOdd([0,2,3]),3);
console.log(EvenOdd([1,0,3]),3);
console.log(EvenOdd([33,11,54]),417);
console.log(EvenOdd([63,64,-5,86]),346322);
console.log(EvenOdd([1,2,6,1,6,3,1,9,6]),393);
console.log(EvenOdd([1,2,6,1,6,1,3,9,6]),159);
console.log(EvenOdd([1,2,2,1,6,1,3,9,6,1]),123);
console.log(EvenOdd([1,2,2,1,6,1,3,9,6,2,32]),278);
console.log(EvenOdd([1,2,2,1,6,10,3,-1,6,2,32]),-162);


// best practice
function EvenOdd2(arr) {
  return arr.reduce( function( sum, now, index, arr ){ return ( index % 2 != 1 ) ? sum + now : sum * now }, 0 );
};

function EvenOdd3(arr) {
  var i = 0;
  return arr.reduce( function(a,b){ i += 1; return i % 2 == 0 ? a + b : a * b; } );
};

function EvenOdd4(arr){
  return arr.reduce( function( a, c, i ) {
    return i % 2 === 0 ? a + c : a * c ;
  }, 0 );

}
