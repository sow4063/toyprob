// https://www.codewars.com/kata/52ec24228a515e620b0005ef

/*
How many ways can you make the sum of a number?

From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

In number theory and combinatorics, a partition of a positive integer n,
also called an integer partition, is a way of writing n as a sum of positive integers.
Two sums that differ only in the order of their summands are considered the same partition.
If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
Examples

Trivial

sum(-1) // 0
sum(1) // 1
Basic

sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42
Explosive

sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/

// timeout : over 1200ms
function partition(s,t) {

  if( t == 0  || s < 0 )
    return 0;

  if( s == 0 )
    return 1;

  return partition( s, t - 1 ) + partition( s - t, t );

};

function sum(num) {
  return partition(num, num);
};

module.exports = sum;
