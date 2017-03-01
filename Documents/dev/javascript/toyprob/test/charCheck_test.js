var assert = require('chai').assert;
var charCheck = require('../js/charCheck.js');

describe("Fixed Tests", function(){

	it ("should return OK if texts fit character count", function(){
		assert.deepEqual( charCheck("I am applying for the role of Base Manager on Titan.", 60, true), [true, "I am applying for the role of Base Manager on Titan."] );
		assert.deepEqual( charCheck("I am looking to relocate to the vicinity of Saturn for family reasons.", 70, true), [true, "I am looking to relocate to the vicinity of Saturn for family reasons."] );
	});

	it ("should return true if texts fit character count, with spaces removed if needed", function(){
		assert.deepEqual( charCheck("As Deputy Base Manager on Phobos for five Martian years, I have significant relevant experience.", 90, false), [true, "AsDeputyBaseManageronPhobosforfiveMartianyears,Ihavesignificantrelevantexperience."] );
		assert.deepEqual( charCheck("A challenging career moment came with the rapid depletion of water supplies on Phobos.", 80, false), [true,"AchallengingcareermomentcamewiththerapiddepletionofwatersuppliesonPhobos."] );	
	});
	
	it ("should not return true if texts do not fit character count", function(){
		assert.notEqual( charCheck("Despite what some have suggested, this had nothing to do with the decorative fountains I had installed in my private quarters.", 100, false), [true,"Despite what some have suggested, this had nothing to do with the decorative fountains I had installed in my private quarters."], "The input text length is above the character limit.");
		assert.notEqual( charCheck("Anyway what sort of society would we be if a Deputy Base Manager couldn't allow herself a few luxuries?", 70, false), [true,"Anyway what sort of society would we be if a Deputy Base Manager couldn't allow herself a few luxuries?"], "The input text length is above the character limit.")
	});
	
	it ("should not return true if texts do not fit character count, with spaces included if needed", function(){
		assert.notEqual( charCheck("I swiftly resolved the situation with base-wide water rationing.", 60, true), [true, "I swiftly resolved the situation with base-wide water rationing."], "Did you count the spaces as characters?");
		assert.notEqual( charCheck("After four Martian weeks of not washing, several colonists complained of the smell.", 80, true), [true, "After four Martian weeks of not washing, several colonists complained of the smell."], "Did you count the spaces as characters?")
	});
	
	it ("should return expected array if texts do not fit character count", function(){
		assert.deepEqual( charCheck("But, as I pointed out, anyone complaining about standing downwind was lying. There was no wind.", 75, true), [false, "But, as I pointed out, anyone complaining about standing downwind was lying"] );
		assert.deepEqual( charCheck("I have no notice period on Phobos. I can start immediately.", 50, true), [false, "I have no notice period on Phobos. I can start imm"] );
	});	
});