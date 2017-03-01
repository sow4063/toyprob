var assert = require('chai').assert;
var findMissing = require('../js/missingTerm.js');

describe('Finding Missing Term', function(){
	it('Basic Tests', function(){
		assert.equal( findMissing([1,3,5,9,11]), 7 );
	});
});