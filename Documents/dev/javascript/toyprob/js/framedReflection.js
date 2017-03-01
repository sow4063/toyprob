// https://www.codewars.com/kata/framed-reflection

/*
100th Kata

You are given a message (text) that you choose to read in a mirror (weirdo).
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

*/

function mirror(text){

  var arr = text.split(' ');

  var max = 0;
  for( var i = 0; i < arr.length; i++ ) {
    if( max < arr[i].length )
      max = arr[i].length;
  }

  var deco = new Array(max+4).fill('*').join('');
  var str = deco + '\n';

  for( var i = 0; i < arr.length; i++ ) {
    var len = max - arr[i].length;
    str += '* ' + arr[i].split("").reverse().join("") + (new Array(len).fill(' ').join('')) + ' *\n';
  }

  str += deco;

  return str;
};

module.exports = mirror;

// best practice
function mirror(text) {
  const words = text.split(' ');
  const width = Math.max.apply(null, words.map(w => w.length));
  const tb = '*'.repeat(width + 4);
  const revs = words.map(w => `* ${Array.from(w).reverse().join('')}${' '.repeat(width - w.length)} *`).join('\n');
  return `${tb}\n${revs}\n${tb}`;
}
