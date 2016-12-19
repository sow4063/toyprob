// https://www.codewars.com/kata/human-readable-time/train/javascript

/*
Write a function, which takes a non-negative integer (seconds) as input and
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {

  var hours = parseInt( seconds / 3600 );
  var minutes = parseInt( seconds % 3600 / 60 );
  seconds = seconds % 60;

  hours = ("00" + hours).slice(-2);
  minutes = ("00" + minutes).slice(-2);
  seconds = ("00" + seconds).slice(-2);

  return hours + ':' + minutes + ':' + seconds;
};

module.exports = humanReadable;

// best practice
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
