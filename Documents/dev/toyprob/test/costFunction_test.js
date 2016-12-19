var assert = require('chai').assert;
var costFunctionJ = require('../js/costFunction.js');

describe('Cost Function', function() {
  var trainingSet = [[2, 1], [2, 4], [5, 4], [5, 8], [9, 8], [9, 11]];

  it('Basic Tests', function() {
    assert.equal( costFunctionJ(trainingSet, 1, 1), 1.5 );
  });

  it('Basic Tests', function() {
    assert.equal( costFunctionJ(trainingSet, 0, 1.2), 1.7 );
  });

  it('Basic Tests', function() {
    assert.equal( costFunctionJ(trainingSet, 1, 1.8), 14.7 );
  });

  var trainingSet2 = [ [ 8, 1 ], [ 2, 2 ], [ 1, 4 ], [ 8, 8 ], [ 2, 8 ], [ 6, 11 ] ];
  it('Basic Tests', function() {
    assert.equal( costFunctionJ(trainingSet2, 1, 1.1), 10.028 );
  });

});
