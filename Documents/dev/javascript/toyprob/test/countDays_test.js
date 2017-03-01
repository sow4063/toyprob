var assert = require('chai').assert;
var countDays = require('../js/countDays.js');

describe('Count the days!', function() {
  it('Basic Tests', function() {
  	assert.equal( countDays( new Date('2030-04-20T23:12:29.349Z') ), '4851 days' );
  } );
} );