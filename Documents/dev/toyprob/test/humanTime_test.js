var assert = require('chai').assert;
var humanReadable = require('../js/humanTime.js');

describe('Human Readable Time', function() {
  it('Basic Tests', function() {
    assert.equal( humanReadable(0), '00:00:00' );
    assert.equal( humanReadable(5), '00:00:05' );
    assert.equal( humanReadable(60), '00:01:00' );
    assert.equal( humanReadable(86399), '23:59:59' );
    assert.equal( humanReadable(359999), '99:59:59' );
  });
});
