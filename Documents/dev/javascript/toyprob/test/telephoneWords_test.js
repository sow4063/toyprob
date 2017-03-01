var assert = require('chai').assert;
var telephoneWords = require('../js/telephoneWords.js');


var resultA = ['APGJ','APGK','APGL','APHJ','APHK','APHL','APIJ','APIK','APIL','AQGJ','AQGK','AQGL','AQHJ','AQHK','AQHL','AQIJ',
              'AQIK','AQIL','ARGJ','ARGK','ARGL','ARHJ','ARHK','ARHL','ARIJ','ARIK','ARIL','ASGJ','ASGK','ASGL','ASHJ','ASHK',
              'ASHL','ASIJ','ASIK','ASIL'];

var resultB= ['BPGJ','BPGK','BPGL','BPHJ','BPHK','BPHL','BPIJ','BPIK','BPIL','BQGJ','BQGK','BQGL','BQHJ','BQHK','BQHL','BQIJ',
              'BQIK','BQIL','BRGJ','BRGK','BRGL','BRHJ','BRHK','BRHL','BRIJ','BRIK','BRIL','BSGJ','BSGK','BSGL','BSHJ','BSHK',
              'BSHL','BSIJ','BSIK','BSIL'];

var resultC = ['CPGJ','CPGK','CPGL','CPHJ','CPHK','CPHL','CPIJ','CPIK','CPIL','CQGJ','CQGK','CQGL','CQHJ','CQHK','CQHL','CQIJ',
              'CQIK','CQIL','CRGJ','CRGK','CRGL','CRHJ','CRHK','CRHL','CRIJ','CRIK','CRIL','CSGJ','CSGK','CSGL','CSHJ','CSHK',
              'CSHL','CSIJ','CSIK','CSIL'];                            

var result = [];
result = result.concat( resultA );
result = result.concat( resultB );
result = result.concat( resultC );

describe('telephoneWords', function(){
  it('Basic Tests', function(){
    assert.deepEqual( telephoneWords('2745'), result );
  });
});




