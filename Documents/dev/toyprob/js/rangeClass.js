/**
 * 다음과 같은 숫자_범위(range)를 나타내는 클래스(Class)를 작성하십시오.
 *   - 시작할(start) value.
 *   - 끝나는(end) value (optional)
 *     end value가 없으면 range에는 전달 된 start value만 포함되어야합니다.
 *   - 스텝(step) (optional)
 *     step은 item이 포함되는 간격입니다.
 *     예를 들어 step value로 1은 range의 모든 item들을 포함하고 
 *   step value 2는 2 step마다 하나씩 item이 생깁니다.
 *
 * Range에는 위 argument들을 순서대로 수용하는 constructor가 있어야합니다.
 *
 * 또한 다음 유틸리티 기능을 지원해야합니다:
 *   - size(): range가 나타내는 item 수를 return 합니다.
     - each(callback(index)): 각 value를 callback function에 전달하여 range를 iterate 합니다.
 *   - includes(index): range에 argument로 받은 value가 포함 되어 있는지를 return합니다.
 *
 * 또한 다음과 같은 주의 사항을 알고 있어야합니다:
 *   - 거꾸로 계산하려면 'step'에 음수 값을 허용해야합니다.
 *   - step을 제공하지 않으면 기본값은 1입니다.
 *   - 시작 값이 종료 값보다 크면 우리는 거꾸로 세고 있다고 가정합니다.
 *   - start value가 없다면 null을 return 해야 합니다.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); 
 * // [0 ,1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10]    // 0과 10도 포함됩니다.
 *
 * var evenNumbers = new Range(2,8,2); 
 * // [2, 4, 6, 8]
 *
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 *
 * evenNumbers.size() // 4
 * evenNumbers.includes(2)   // true
 * evenNumbers.includes(3)   // false
 */


var Range = function(start, end, step) {
  if( start === undefined ) return null;
  this.start = start || null;
  this.end = end || start;
  this.step = step || 1;
  this.items = [];

  for( let i = this.start; i <= this.end; i += this.step ) {
    this.items.push(i);  
  }

  return this;
};

Range.prototype.size = function () {
  return this.items.length;
};

Range.prototype.each = function (callback) {
  for( let i = 0; i < this.items.length; i++ ) {
  	callback( this.items[i] );
  }
};

Range.prototype.includes = function (val) {
  return this.items.includes(val);
};

module.exports = Range;

// solution
var Range = function(strt, end, step){
  if( start === undefined )
    return null;

  this.start = start;

  if( end === undefined )
    this.end = this.start;
  else
    this.end = end;

  if( step === undefined )
    this.step = this.start < this.end ? 1 : -1;
  else
    this.step = step;

  return this;

};

Range.prototype.size = function () {
  return Math.floor( (this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {
  if( this.step > 0 ) {
    for(let i = this.start; i <= this.end; i += this.step ) {
      callback(i);
    }
  }
  else {
    for(let i = this.start; i >= end; i += step){
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  return (
    (val >= this.start) && (val <= this.end) &&
    ( ( ( this.start - val ) % this.step ) === 0 )
  );
};




