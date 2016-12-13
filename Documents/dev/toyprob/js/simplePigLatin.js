// https://www.codewars.com/kata/simple-pig-latin/train/javascript

/*
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

function pigIt(str){
  return str.split(' ').map(function(v){
    var arr = v.split('');
    arr.push( arr.shift() + 'ay');
    return arr.join('');
  }).join(' ');
};

module.exports = pigIt;

// best practice
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
