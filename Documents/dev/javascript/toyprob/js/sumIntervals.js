// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

/*
Description:

Write a function called sumIntervals that accepts an array of intervals, and
returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals

Intervals are represented by a pair of integers in the form of an array.
The first value of the interval will always be less than the second value.
Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals

List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap,
we can treat the interval as [1, 5], which has a length of 4.

Examples:

sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); //=> returns 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); //=> returns 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); //=> returns 19
*/

function sumIntervals(intervals){
  var sum = 0;

  intervals.sort(function(a,b){
    return a[0] > b[0];
  });

  console.log(intervals);

  for( var i = intervals.length - 1; i > 0; i-- ) {
    if( intervals[0][0] <= intervals[i][0] && intervals[0][1] >= intervals[i][1] ) {
      console.log('poped = ', i, intervals.splice(i,1));
    }

  }

  console.log(intervals);

  intervals.forEach(function(v,i,arr){
    sum += v[1] - v[0];
  });

  for( var i = 1; i < intervals.length; i++ ) {
    if( intervals[i-1][1] > intervals[i][0] ) {
      sum -= intervals[i-1][1] - intervals[i][0];
    }
  }

  return sum;
};

module.exports = sumIntervals;

// best prcctice
function sumIntervals(intervals){
  return intervals
    .sort(function(a, b){
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .reduce(function(acc, interval) {
      if (interval[1] > acc.top) {
        acc.total += interval[1] - Math.max(interval[0], acc.top);
      }
      acc.top = Math.max(interval[1], acc.top);
      return acc;
    }, {total: 0, top: 0})
    .total;
}

// clever
function sumIntervals(intervals){
  var numbers = [];
  intervals.forEach( function(interval) {
    for (var i = interval[0] ; i < interval[1] ; i++) {
      if (numbers.indexOf(i) == -1) numbers.push(i);
    }
  });
  return numbers.length;
}
