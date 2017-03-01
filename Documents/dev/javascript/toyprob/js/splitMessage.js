// https://www.codewars.com/kata/collaboration-station/train/javascript

/*
You have a secret message for your friends.
You want to mail it to them. But,
you are well aware that each of their mail carriers reads their mail before delivering it.
So, instead of sending the entire message, you only send some characters to each of them.

If you have n friends, friend 1 gets character 1, n + 1, 2n + 1, etc.
And friend 2 gets character 2, n + 2, 2n + 2, etc. All other characters are replaced with dashes.

Example:  3 friends, message: I think you are all sexy
Friend 1 receives: I--h--k--o--a-- --l--e--
Friend 2 receives: - --i-- --u--r--a-- --x-
Friend 3 receives: --t--n--y-- --e--l--s--y

Treat null messages as empty strings (C#, JavaScript).
If your number of friends is greater than the length of your message,
some friends will simply receive all dashes.
If you have zero friends (or less than zero), return null (empty vector for C++);
*/

splitMessage = function(message, count)
{
  if(count < 1) return null;

  var arr = new Array(count).fill('');

  if(!message)
    return arr;

  for(var j = 0; j < count; j++ ) {
    for(var i = 0; i < message.length; i++ ) {
      var idx = i % count;

      if( idx == j ) {
        arr[j] += message[i];
      }
      else {
        arr[j] += '-';
      }

    }

  }

  return arr;
};

console.log(splitMessage("I think you are all sexy", 3));
console.log(["I--h--k--o--a-- --l--e--","- --i-- --u--r--a-- --x-","--t--n--y-- --e--l--s--y"]);

console.log(splitMessage("Short", 20));
console.log(["S----","-h---","--o--","---r-","----t","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----"]);

// best practice
const splitMessage = (m, n) => n < 1? null: (m = m || "", new Array(n).fill(0).map((_, i) => m.replace(/./g, (c, j) => j % n == i? c: '-')));

// 
/*
var map = Array.prototype.map
var a = map.call("Hello World", function(x) { return x.charCodeAt(0); })
// a の内容は [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100] となる
*/
// Generate a sequence of numbers
console.log(Array.from({length: 5}, (v, k) => k));
