//

// function partitions(target, maxValue, suffix) {
//
//   var result = [];
//
//   if( target === 0 ) {
//     console.log( suffix );
//   }
//   else {
//     if( maxValue > 1 )
//       partitions( target, maxValue - 1, suffix );
//
//     if( maxValue <= target )
//       partitions( target - maxValue, maxValue, maxValue + " " + suffix );
//   }
//
// };
//
// function partitions(target)
// {
//    partitions( target, target, "" );
// };

function makePartition( sum, largestNumber, table ) {

  for( var i = 1; i <= sum; i++ ) {
    for( var j = 1; j <= largestNumber; j++ ) {
      if( i - j < 0 ) {
        table[i][j] = table[i][j-1];
        continue;
      }
      table[i][j] = table[i][j-1] + table[i-j][j];
    }
  }

  //return table[sum][largestNumber];
  return table;
  // if( sum == largestNumber )
  //   return 1 + partition(sum, largestNumber-1);

};

function partitions(num)
{
  var sum = num;
  var largestNumber = sum - 1;

  var table = new Array(sum+1);
  for( var i = 0; i < sum+1; i++ ) {
    table[i] = new Array(sum+1);
  }

  // initialize table with base cases
  for( var i = 0; i <= sum; i++ )
    table[i][0] = 0;

  for( var i = 1; i <= largestNumber; i++ )
    table[0][i] = 1;

  console.log( makePartition( sum, largestNumber, table ) );

};


module.exports = partitions;
