// https://www.codewars.com/kata/520d9c27e9940532eb00018e

/*
Description:

Complete the solution so that it returns true if it contains any duplicate argument values.
Any number of arguments may be passed into the function.
The solution should implement the most optimal algorithm possible.

solution(1, 2, 3) // returns false
solution(1, 2, 3, 2) // returns true
solution('1', '2', '3', '2') // returns true
The array values passed in will only be strings or numbers.
The only valid return values are true and false.
*/

function solution(){
 var args = Array.prototype.slice.call(arguments);

 var out = args.filter(function(v,i){
   return args.indexOf(v) === i;
 });

 return args.length !== out.length;

};

module.exports = solution;

// best practice
function solution(){return new Set(arguments).size!=arguments.length;}
