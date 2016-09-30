// https://www.codewars.com/kata/who-won-the-election/train/javascript

// 重複を削除したリスト
var a = [1,2,3,3,2,2,5];
var b = a.filter( function (x, i, self) { return self.indexOf(x) === i; } );

Array.prototype.unique = function()
{
	var n = {},r=[];
	for(var i = 0; i < this.length; i++)
	{
		if (!n[this[i]])
		{
			n[this[i]] = true;
			r.push(this[i]);
		}
	}
	return r;
}

function getWinner(arr) {
  var uniarr = arr.unique();
  var max = 0;
  var idx = 0;

  for( var i = 0; i < uniarr.length; i++ ) {
    var cnt = 0;

    for(var j = 0; j < arr.length; j++ ) {
      if(uniarr[i] == arr[j])
        cnt++;
    }

    if( cnt > max ) {
      max = cnt;
      idx = i;
    }

  }

  return max > Math.floor(arr.length / 2) ? uniarr[idx] : null;

};

console.log(getWinner(["A"]), "A", "\"A\" expected");
console.log(getWinner(["A", "A", "A", "B", "B", "B", "A"]), "A", "\"A\" expected");
console.log(getWinner(["A", "A", "A", "B", "B", "B"]), null, "NULL expected");
console.log(getWinner(["A", "A", "A", "B", "C", "B"]), null, "NULL expected");
console.log(getWinner(["A", "A", "B", "B", "C"]), null, "NULL expected");

// best practice
function getWinner2(list) {
    var result= {};
    var winNumber = list.length / 2;

    list.forEach( function(char) { ++result[char] || (result[char] = 1); });

    var answer = Object.keys(result).filter( function(key) { if( result[key] > winNumber ) return key; } );

    return answer[0] || null;
};

/* Object.key(obj);
与えられたオブジェクト自身に存在する列挙可能なプロパティの配列を、
for-in ループで提供されるものと同じ順番で返します (for-in ループとの違いは、
for-in ループではプロトタイプチェインのプロパティも列挙することです)。
*/
