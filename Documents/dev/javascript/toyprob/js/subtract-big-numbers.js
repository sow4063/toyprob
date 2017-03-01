// https://www.codewars.com/kata/subtract-big-numbers/train/javascript

/*
Subtract big numbers passed as strings

Arguments are passed as strings
Result should be returned as string
3 - 2 should return 1 while 2 - 3 should return -1
Zeros should not preceed a number! 02, -02, 0001 are invalid
Very large numbers will be tested
Note: 100 randomly generated tests
*/

function subtract(a, b){
  var len = Math.max( a.length, b.length );
  var result = new Array(len).fill(0);
  var carry = 0;

  var arra = a.split('');
  var arrb = b.split('');

  while( arra.length || arrb.length ) {
    var v1 = parseInt(arra.pop()) || 0;
    var v2 = parseInt(arrb.pop()) || 0;

    var sub = Math.abs(v1 - v2);

    if( v1 < v2 ) {
      carry = -1;
    }
    else {
      carry = 1;
    }

    result.unshift(sub);

    console.log(sub, carry, result);
    
    

  }
  
  // for( var i = len - 1; i >= 0; i-- ) {

  // 	console.log('a, b',  a[i], b[i]);
  //   var val = 0;
    
  //   if( a[i] < b[i] ) {
  //     if( i === 0 ) {
  //       val = a[i] - carry - b[i];
  //       carry = 0;
  //     }
  //     else {
  //     	val = 10 + a[i] - carry - b[i];
  //       carry = 1;
  //     }
      
  //   }
  //   else {
  //     val = a[i] - carry - b[i];
  //     carry = 0;
  //   }
    
  //   result[i] = val;

  //   console.log('result=', val, result[i]);
  // }
  
  var subtract = carry * parseInt( result.join('') );
  
  return subtract;
  
};

module.exports = subtract;

// best practice
