// https://www.codewars.com/kata/selective-array-reversing

/*
Description:

Given an array, return the reversed version of the array (a different kind of reverse though), 
you reverse portions of the array, you'll be given a length argument which represents the length of 
each portion you are to reverse.

E.g

selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]
if after reversing some portions of the array and the length of the remaining portion in the array 
is not up to the length argument, just reverse them.

selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]
selReverse(array, length)

array - array to reverse
length - length of each portion to reverse
Note : if the length argument exceeds the array length, reverse all of them, 
if the length argument is zero do not reverse at all.
*/

function selReverse(array, length) {
  if( length < 1 )
  	return array;

  if( array.length < length ) {
  	return array.reverse();
  }

  var arr = array.slice(0);
  var newArr = [];
  while( arr.length ) {
    newArr = newArr.concat( arr.splice(0, length).reverse() );
  }

  console.log( newArr );

  return newArr;

};

module.exports = selReverse;

// best practice
function selReverse(array, length) {
  if (length === 0) {
    return array;
  }
  let result = [];
  
  do {
    let arr = array.splice(0, length);
    result.push(...arr.reverse());
  } while(array.length > 0);
  
  return result;
};

// clever
const selReverse=(arr,l)=>l ? Array.from({length:Math.ceil(arr.length/l)},(a,i)=>arr.slice(i*l,i*l+l).reverse()).reduce((a,b)=>a.concat(b),[]) : arr;
