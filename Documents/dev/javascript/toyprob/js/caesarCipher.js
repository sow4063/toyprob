// https://www.codewars.com/kata/caesar-cipher-helper/train/javascript

/*
Write a class that, when given a string, will return an uppercase string with
each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
*/

var CaesarCipher = function (shift) {
  var list = 'abcdefghijklmnopqrstuvwxyz';

  this.encode = function(str){
    str = str.toLowerCase().split('');
    return str.map(function(v){
      if( list.indexOf(v) === -1 )
        return v;

      var idx = ( list.indexOf(v) + shift ) % list.length;
      return list[idx];
    }).join('').toUpperCase();

  };

  this.decode = function(str){
    str = str.toLowerCase().split('');
    return str.map(function(v){
      if( list.indexOf(v) === -1 )
        return v;

      var idx = list.indexOf(v) - shift < 0 ? list.length + list.indexOf(v) - shift : ( list.indexOf(v) - shift ) % list.length;
      return list[idx];
    }).join('').toUpperCase();

  };

};

module.exports = CaesarCipher;

// best practice
var CaesarCipher = function (shift) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  this.encode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26]
    })
  }
  this.decode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26]
    })
  }
};
