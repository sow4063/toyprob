// https://www.codewars.com/kata/find-the-smallest/train/javascript

/*
You have a positive number n consisting of digits.
You can do at most one operation: Choosing the index of a digit in the number,
remove this digit at that index and insert it back to another place in the number.

Doing so, find the smallest number you can get.

Task:

Return an array or a tuple depending on the language
(see "Your Test Cases" Haskell) with

1) the smallest number you got
2) the index i of the digit d you took, i as small as possible
3) the index j (as small as possible) where you insert this digit d to have the smallest number.

Example:

smallest(261235) --> [126235, 2, 0]
126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

smallest(209917) --> [29917, 0, 1]

[29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
index `i` in [29917, 0, 1].
29917 is the smallest number gotten by taking 2 at index 0 and
putting it at index 1 which gave 029917 which is the number 29917.

smallest(1000000) --> [1, 0, 6]
*/

// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// };

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
};

function moveArray(arr, fromIdx, toIdx) {
    var element = arr[fromIdx];
    arr.splice(fromIdx, 1);
    arr.splice(toIdx, 0, element);
};

function smallest(n) {
  var arr = (''+n).split('');
  var min = n;
  var idx = 0;
  var to = 0;
  var result = {};

  for( var i = 0; i < arr.length; i++ ) {
    for( var j = 0; j < arr.length; j++ ) {
      if( i !== j && arr[i] <= arr[j] && arr[j] <= arr[j+1] ) {
        if(j > i) j--;
        break;
      }
    }

    if( j >= arr.length ) j = arr.length - 1;

    var tmp = (''+n).split('');
    moveArray(tmp,i,j);

    if( parseInt(tmp.join('')) < min ) {
      min = parseInt(tmp.join(''));
      idx = i;
      to = j;
    }

  }

  return [min, idx, to];
};

console.log(smallest2(261235), [126235, 2, 0]);
console.log(smallest2(209917), [29917, 0, 1]);
console.log(smallest2(285365), [238565, 3, 1]);
console.log(smallest2(269045), [26945, 3, 0]);
console.log(smallest2(296837), [239687, 4, 1]);
console.log(smallest2(1000000), [1, 0, 6]);
console.log(smallest2(199819884756), [119989884756, 4, 0]);
console.log(smallest2(111111111), [111111111, 0, 0]);
console.log(smallest2(4016934765656949), [164934765656949, 0, 2]);
console.log(smallest2(7013747293355436), [137472793355436, 0, 7]);
console.log(smallest2(4004332088653009), [43320488653009, 0, 7]);
console.log(smallest2(8023666322865488), [236663228654888, 0, 13]);
console.log(smallest2(605556164830891), [55561646830891, 0, 8]);

// +number : ToNumber(number) = parseInt

function smallest2(n) {
  let iter = `${n}`.length, res = new Map();

  for (let i = 0; i < iter; i++) {
    for (let j = 0; j < iter; j++) {
      let number = `${n}`.split('').move(i, j).join('');
      if (!res.has(+number)) res.set(+number, [i, j]);
    }
  }

  let min = Math.min(...res.keys());
  return [min, ...res.get(min)];
};
