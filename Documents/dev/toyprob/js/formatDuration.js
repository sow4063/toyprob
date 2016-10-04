// https://www.codewars.com/kata/human-readable-duration-format/train/javascript

/*
Your task in order to complete this Kata is to write a function which
formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer.
If it is zero, it just returns "now".
Otherwise, the duration is expressed as a combination of years, days, hours,
minutes and seconds.

It is much easier to understand with an example:

  formatDuration(62)    // returns "1 minute and 2 seconds"
  formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
Note that spaces are important.

Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc.
In general, a positive integer and one of the valid units of time, separated by a space.
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", ").
Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one.
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times.
So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero.
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible".
It means that the function should not return 61 seconds, but 1 minute and 1 second instead.
Formally, the duration specified by of a component must not be greater than
any valid more significant unit of time.

For the purpose of this Kata, a year is 365 days and a day is 24 hours.
*/

String.prototype.replaceLast = function (what, replacement) {
  var all = this.split(what);
  var last = all.pop();
  return all.join(what) + replacement + last;
};

function lastAdding(num){
  return num > 1 ? 's' : '';
};

function formatDuration (seconds) {

  if( seconds == 0 )
    return "now";

  var year    = Math.floor(seconds / 31536000 );
  var day     = Math.floor(seconds / 86400 ) % 365;
  var hour    = Math.floor(seconds / 3600) % 24;
  var min     = Math.floor(seconds / 60) % 60;
  var sec     = seconds % 60;

  var result = [];

  if( year )
    result.push( year + " year" + lastAdding(year) );

  if( day )
    result.push( day  + " day" + lastAdding(day) );

  if( hour )
    result.push( hour + " hour" + lastAdding(hour) );

  if( min )
    result.push( min  + " minute" + lastAdding(min) );

  if( sec )
    result.push( sec  + " second" + lastAdding(sec) );

  var str = result.join(', ');

  if( result.length > 1 )
    str = str.replaceLast(',', ' and');

  return str;

};


console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

// best practice
function formatDuration(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
  var res = [];

  if( seconds === 0 )
    return 'now';

  for( var key in time ) {
    if( seconds >= time[key] ) {
      var val = Math.floor( seconds / time[key] );
      res.push( val += val > 1 ? ' ' + key + 's' : ' ' + key );
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0];
}
