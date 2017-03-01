// https://www.codewars.com/kata/merged-string-checker/train/javascript

/*
At a job interview, you are challenged to write an algorithm to check if a given string,
s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and
tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

*/

// function isMerge(s, part1, part2) {
//
//   console.log(s,',',part1,',',part2);
//
//   if(s.length != part1.length + part2.length) {
//     return false;
//   }
//
//   var str = s.split('');
//   var p1 = part1.split('');
//   var p2 = part2.split('');
//
//   for( var i = 0; i < str.length; i++ ) {
//     if( str[i] == p2[0]) {
//       p2.shift();
//     }
//     else if( str[i] == p1[0]) {
//       p1.shift();
//     }
//
//   }
//
//   return p1.length > 0 || p2.length > 0 ? false : true;
//
// };

function sortStr(str)
{
  return str.split('').sort().join('');
};

function isMerge(s, part1, part2) {

  if( s.length != part1.length + part2.length ) {
    return false;
  }

  var order1 = true;
  var order2 = true;
  var startPoint = 0;

  var sarr = sortStr(s.toLowerCase()).split(' ');
  var p1 = sortStr((part1+part2).toLowerCase()).split(' ')

  if( sarr.join('') == p1.join('') ) {

    for( var i = 0; i < part1.length; i++ ) {
      order1 = order1 && ( s.slice(startPoint).indexOf(part1[i]) != -1 );

      if(order1)
        startPoint = s.slice(startPoint).indexOf(part1[i]);
    }

    startPoint = 0;
    var idx = 0;

    for( var i = 0; i < part2.length; i++ ) {

      idx = s.slice(startPoint).indexOf(part2[i]);
      order2 = order2 && (idx != -1);

      if(order2) {
        startPoint += idx;
      }

    }

    return order1 && order2;
  }

  return false;
};

console.log(isMerge('codewars', 'code', 'wars'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(isMerge('codewars', 'cod', 'wars'));
console.log(isMerge('codewars', 'code', 'wasr'));

// best practice
function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
};
