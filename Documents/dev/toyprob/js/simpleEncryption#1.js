// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript

/*
For building the encrypted string:
Take every 2nd char from the string. Then the other chars.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

This kata is part of the Simple Encryption Series:
Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
*/

function encrypt(text, n) {

  if(arguments.length < 2 )
    return null;

  if( n < 1 )
    return text;

  if( text === "")
    return "";

  if( !text )
    return null;

  var idx = n;
  var arr = text.split("");
  var encrypted = [];

  for( var i = 1; i <= n; i++ ) {

    idx = 1;

    while( encrypted.length < arr.length ) {

      encrypted.push( arr[idx] );
      idx += 2;

      if( idx >= arr.length ) {
        idx = 0;
      }

    };

    if( i <= ( n - 1 ) ) {

      var str = encrypted.join("");
      encrypted = "".split("");
      arr = str.split("");
    }


  }

  return encrypted.join("");

};

function decrypt(encryptedText, n) {

  if(arguments.length < 2 )
    return null;

  if( n < 1 )
    return encryptedText;

  if( encryptedText === "")
    return "";


  var decrypted = new Array(encryptedText.length+1).join("").split("");
  var didx = 1;
  var arr = encryptedText.split("");

  for( var i = 1; i <= n; i++ ) {

    didx = 1;

    for( var j = 0; j < arr.length; j++ ) {

      decrypted[didx] = arr[j];

      didx += 2;

      if( didx >= arr.length ) {
        didx = 0;
      }

    };

    if( i <= ( n - 1 ) ) {

      var str = decrypted.join("");
      decrypted.fill('');
      arr = str.split("");

    }

  }

  return decrypted.join("");

};

module.exports = encrypt
module.exports = decrypt

// best practice
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}
