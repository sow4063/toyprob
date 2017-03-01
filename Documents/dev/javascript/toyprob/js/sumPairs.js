// https://www.codewars.com/kata/sum-of-pairs/train/javascript

/*
Sum of Pairs

Given a list of integers and a single sum value,
return the first two values (parse from the left please) in order of
appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

note: There will also be lists tested of lengths upwards of 10,000,000 elements.
Be sure your code doesn't time out.
*/

// version for brute force.

// var sum_pairs=function(ints, s){
//   var obj = {};
//   for(var i = 0; i < ints.length - 1; i++ ) {
//     for(var j = 1; j < ints.length; j++)  {
//       if( ints[i] + ints[j] == s && ints[i] > -1)
//         obj[ints[i]] = [ints[i], ints[j]];
//     }
//   }
//
//   var sorted_keys = Object.keys(obj).sort();
//   return obj[sorted_keys[0]];
//
// };

// var sum_pairs=function(arr, sum) {
//
//   arr.sort(function(a,b){return a-b;});
//
//   var obj = {};
//   var left = 0;
//   var right = arr.length - 1;
//
//   while( left < right ) {
//     var target = arr[left] + arr[right];
//     if( target == sum ) {
//       if( arr[left] <= 0 )
//         obj[right] = [arr[right], arr[left]];
//       else
//         obj[left] = [arr[left], arr[right]];
//
//       left++;
//     }
//     else if( target < sum ) {
//       left++;
//     }
//     else
//       right--;
//   }
//   var sorted_keys = Object.keys(obj).sort();
//   return obj[sorted_keys[0]];
// };

// best practice
function sum_pairs(ints, s){
  var checked = {};

  for( var i = 0; i < ints.length; ++i ) {
    if( checked[s - ints[i]] )
      return [s - ints[i], ints[i]];
    checked[ints[i]] = 1;
  }

};

l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(sum_pairs(l1, 8),[1, 7]);
console.log(sum_pairs(l2, -6),[0, -6]);
console.log(sum_pairs(l3, -7), undefined);
console.log(sum_pairs(l4, 2),[1, 1]);
console.log(sum_pairs(l5, 10),[3, 7]);
console.log(sum_pairs(l6, 8),[4, 4]);
console.log(sum_pairs(l7, 0),[0, 0]);
console.log(sum_pairs(l8, 10),[13, -3]);
