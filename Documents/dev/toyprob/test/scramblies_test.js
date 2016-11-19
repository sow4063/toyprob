var assert = require('chai').assert;
var scramble = require('../js/scramblies.js');

describe('Scramblies', function(){
  it('Basic Tests', function() {
    assert.equal(scramble('rkqodlw','world'),true);
    assert.equal(scramble('cedewaraaossoqqyt','codewars'),true);
    assert.equal(scramble('katas','steak'),false);
    assert.equal(scramble('scriptjava','javascript'),true);
    assert.equal(scramble('scriptingjava','javascript'),true);
    assert.equal(scramble('scriptsjava','javascripts'),true);
    assert.equal(scramble('jscripts','javascript'),false);
    assert.equal(scramble('aabbcamaomsccdd','commas'),true);
  });

  it('Initial Tests', function() {
    assert.equal(scramble('javscripts', 'javascript'), false);
  });

  it('Initial Tests', function() {
    assert.equal(scramble('scriptjavx', 'javascript'), false);
  });

});
