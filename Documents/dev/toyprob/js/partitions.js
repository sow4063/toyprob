//

function partitions(target, maxValue, suffix) {

  var result = [];

  if( target === 0 ) {
    console.log( suffix );
  }
  else {
    if( maxValue > 1 )
      partitions( target, maxValue - 1, suffix );

    if( maxValue <= target )
      partitions( target - maxValue, maxValue, maxValue + " " + suffix );
  }

};

function partitions(target)
{
   partitions( target, target, "" );
};

module.exports = partitions;
