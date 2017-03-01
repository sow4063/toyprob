// https://www.codewars.com/kata/525f47c79f2f25a4db000025/solutions/javascript

/*
Description:

Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

validPhoneNumber("(123) 456-7890")  =>  returns true
validPhoneNumber("(1111)555 2345")  => returns false
validPhoneNumber("(098) 123 4567")  => returns false
*/

function validPhoneNumber(str){

  if( str.length !== 14 ) return false;

  str = str.split(' ');

  if( str[0].length !== 5 )
    return false;
  else if( str[0][0] !== '(' || str[0][4] !== ')' )
    return false;
  else if( str[1][3] !== '-' )
    return false;

  return true;
};

// best practice
function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}
