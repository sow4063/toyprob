// https://www.codewars.com/kata/valid-parentheses/train/javascript

/*
Write a function called validParentheses that takes a string of parentheses,
and determines if the order of the parentheses is valid.
validParentheses should return true if the string is valid, and false if it's invalid.

Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true

All input strings will be nonempty, and
will only consist of open parentheses '(' and/or closed parentheses ')'
*/

function validParentheses(parens){
  while( parens.indexOf("()") != -1 ) {
    parens = parens.replace("()", "");
  }
  return parens.length === 0;
};

module.exports = validParentheses;

// best practice
function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}
