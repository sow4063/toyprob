// https://www.codewars.com/kata/numbers-plus-pattern/train/javascript

/*
Task

Raj once wanted to code a program to make a plus sign using the numbers but
he didn't have any idea to do so. Using 'n' as a parameter in the function pattern
complete the code and solve the pattern so that Raj fells happy.

Rules/Note:

You are assured that n>1
There are white spaces on top and bottom left corner (take help of test cases)
Examples

pattern(2)

 1
121
 1
pattern(5)

    1
    2
    3
    4
123454321
    4
    3
    2
    1
pattern(12)

             1
             2
             3
             4
             5
             6
             7
             8
             9
             0
             1
  12345678901210987654321
             1
             0
             9
             8
             7
             6
             5
             4
             3
             2
             1
*/

function pattern(n) {
  var res = "";
  var l = n*2;
  var arr = [];

  for( var i = 1; i < l; i++ ) {

    if( i != n )
      arr = new Array(n+1).fill(' ');
    else
      arr = new Array(l).fill(' ');

    arr[arr.length-1] = '\n';

    if( i < n ) {
      arr[n-1] = i%10;
    }
    else if( i > n ) {
      arr[n-1] = (n - (i - n) )%10;
    }
    else {
      for( var j = 0; j < arr.length-1; j++) {

        if( j >= n ) {
          arr[j] = arr[n-(j-n)-2];
        }
        else {
          arr[j] = (j+1)%10;
        }
      }

    }

    res += arr.join('');

  }

  return res;

};

console.log(pattern(12));

// best practice
function pattern(n) {
  let nums = Array.from({ length: n - 1 }, (_, i) => ((i + 1) % 10).toString());
  let space = " ".repeat(n - 1);
  let vert = nums.map(num => space + num);

  return vert.join("\n")
    + "\n"
    + nums.join("")
    + (n % 10).toString()
    + nums.reverse().join("")
    + "\n"
    + vert.reverse().join("\n")
    + "\n";
}
