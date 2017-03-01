var chai = require('chai');
var assert = chai.assert;
var checkAvailability = require('../js/areYouAvailable');

describe('Are You Availabe', function() {

  it('Basic Tests', function() {
    assert.equal(checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "10:00"), '10:15');
  } );

  it('Basic Tests', function() {
    assert.equal(checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "11:00"), true);
  } );

  it('Basic Tests', function() {
    assert.equal(checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "15:50"), true);
  } );

} );
