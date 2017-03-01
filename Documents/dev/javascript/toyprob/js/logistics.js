
// logistics라는 function의 첫번째 input으로는 아래의 missions array를 그리고 두번째 input으로는 임의의 option
//string을 받아 아래의 스펙(Spec) 목록을 실행하도록 logistic function을 써주세요.
// Specs:
// - 2번째 input인 option이 'members'이면 미션에 동원된 총 탐험대 인원수를 return 하세요.
// - 2번째 input인 option이 'supplies'이면 key 이름이 supplies에 있는 이름이고 value는 그 supplies item의 총
// 숫자를 써주시면 됩니다.
//


var missions = [
  {
    'crew members': 2,
    supplies: ['food', 'water'],
    weight: '10000kg',
    'danger level': 0.5,
    date: '04/08/2017',
  },
  {
    'crew members': 4,
    supplies: ['water', 'terraforming equipment', 'seeds'],
    weight: '15000kg',
    'danger level': 0.7,
    date: '05/08/2017',
  },
  {
    'crew members': 2,
    supplies: ['water', 'seeds'],
    weight: '13500kg',
    'danger level': 0.3,
    date: '06/08/2017',
  },
  {
    'crew members': 3,
    supplies: ['food', 'nanobots'],
    weight: '12500kg',
    'danger level': 0.9,
    date:'07/08/2017',
  }
];



function logistics(missions, option){
  //코드 시작
  if( option == 'members' ) {
     var sum = 0;
     for( key in missions) {
       var obj = missions[key];
       if( obj.hasOwnProperty('crew members') ) {
         sum += obj['crew members'];
       }
     }

    return sum;
  } 
  else {
    var suobj = {};
    for( var key in missions) {
       var obj = missions[key];
       if( obj.hasOwnProperty('supplies') ) {
         for(var i = 0; i < obj['supplies'].length; i++) {
           suobj[obj['supplies'][i]] ? suobj[obj['supplies'][i]]++ :
                                       suobj[obj['supplies'][i]] = 1;
         }
       }
    }

    return suobj;
  }

};

console.log(logistics(missions, 'supplies'))
