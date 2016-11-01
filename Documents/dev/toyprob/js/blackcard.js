// "어느것을 고를까요 알아 맞춰보세요 띵동댕 척척박사님!  너 술래!"
// 위와 비슷한 카드게임이 있습니다 바로 블랙카드!
// blackCard라는 function은 사람이름을 array로 받고 번호도 받습니다.
// 그리고 번호만큼 1부터 받은 번호만큼 새어 마지막 번호를 받는 사람은 나가게 됩니다.
// 예제
// blackCard(['길동', '철수', '영희'], 5)를 invoke 하면
// 길동이 1, 철수가 2, 영희가 3, 다시 길동 4, 철수 5임으로 철수는 나가게 됩니다.
// 그렇게 되면 ['길동', '영희']만 남게 되지요.
// 다시 길동 1, 영희 2, 길동 3, 영희 4, 길동 5임으로 길동은 나가게 되고
// 영희만 남게 됨으로 영희가 이기고 게임은 끝이 납니다. 마지막 남은 자, 영희를
// return해주시면 됩니다. blackCard(['길동', '철수', '영희'],5) //--> return 영희

// 위 로직을 반영하여 아래 blackCard function을 작성해주세요.
function removeIdx(arr, num) {
  var idx = 0;

  if( num > arr.length )
    idx = num % arr.length - 1;
  else
    idx = num - 1;

  //console.log(idx);
  arr.splice(idx, 1);

  return arr;
};

var blackCard = function(array, num) {

  while( array.length > 1 ) {

    array = removeIdx(array, num);

    if( array.length == 1 )
      return array;
  };

};

module.exports = blackCard;
