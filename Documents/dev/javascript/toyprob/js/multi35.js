// https://www.codewars.com/kata/multiples-of-3-and-5/train/javascript

function solution(number){
  var sum = 0;
  for(var i = 1; i < number; i++ ) {
    if( i % 15 == 0 ) {
      sum += i;
    }
    else if( i % 3 == 0 ) {
      sum += i;
    }
    else if( i % 5 == 0 ) {
      sum += i;
    }
  }

  return sum;
};

console.log(solution(10),23);
console.log(solution(16),60);
console.log(solution2(16),60);

// best practice
function solution(number){
  var sum = 0;

  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i;
    }
  }
  return sum;
}


// https://www.codewars.com/kata/multiples-of-3-and-5-redux
// https://www.codewars.com/kata/nth-root-of-a-number-redux
