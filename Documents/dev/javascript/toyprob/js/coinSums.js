/*

영국에서는 화폐가 pound, £, pence p로 이루어져 있으며 동전이 총 8 개가 있습니다:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

£2 를 다음과 같이 만들 수 있습니다:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p

많은 동전을 사용하여 £2를 몇 가지 방법으로 만들 수 있습니까?

`makeChange`의 사용법 예제:

// 일명, 1p를 만드는 방법은 딱 하나 있습니다. 단일 1p 조각이 있습니다.
makeChange(1) === 1
// 그리고 2p 를 만드는 방법은 딱 2가지 입니다. 그것은! 2개의 1p piece와 하나의 2p piece를 사용하는것입니다.
makeChange(2) === 2
*/

var makeChange = function(total, coins) {
  var counter = 0;
  coins.sort(function(a,b){return a - b;});

  (function recurse(index, remainder){
    var coin = coins[index];
    if( index === 0 ){
      remainder % coin === 0 && counter++;
      return;
    }

    while( remainder >= 0 ) {
      recurse(index-1, remainder);
      remainder -= coin;
    }



  })(coins.length-1, total);

  return counter;

};

module.exports = makeChange;


