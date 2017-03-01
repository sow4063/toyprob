// https://www.codewars.com/kata/highest-rank-number-in-an-array/train/javascript

/*
Write a method highestRank(arr) (or highest-rank in clojure) which returns
the number which is most frequent in the given input array (or ISeq).
If there is a tie for most frequent number, return the largest number of
which is most frequent.

Example:

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3
*/

function highestRank(arr){
  var obj = {};

  arr.forEach(function(v){ obj[v]? ++obj[v] : obj[v] = 1; } );

  var sorted = Object.keys(obj).sort(function(a,b){
    if( obj[b] == obj[a] )
      return b - a;
    else
      return obj[b] - obj[a];
    }
  );

  return Number(sorted[0]);

};

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log( highestRank(arr), 12);

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
console.log( highestRank(arr), 12);

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
console.log( highestRank(arr), 3);

// best practice
function highestRank2(arr){
  var obj = {};
  arr.forEach(function(elem){
     if(obj[elem] === undefined)
       obj[elem] = 0;
     obj[elem]++;
  });
  var keys = Object.keys(obj), highest = 0, key;
  keys.forEach(function(elem){
     if(obj[elem] >= highest)
     {
        highest = obj[elem];
        key = elem;
     }
  })
  return parseInt(key);
};

// clever
function highestRank3(arr){
  var max=0,ret;
  arr.reduce(function (a,b){
    a[b]=~~a[b]+1;
    a[b]>max && (max=a[ret=b]);
    return a;
  },{});
  return ret;
};
