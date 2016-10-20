var chai = require('chai');
var assert = chai.assert;
var searchNames = require('../js/javascriptFilter3.js');

describe( "Testing a list", function(){

  it( "Basic list", function(){
    var a = [ "foo", "foo@foo.com", "bar.", "bar@bar.com" ],
    b = [ "bar@bar.com" ];

    assert.equal( searchNames( a ).join(''), b.join('') );
  } );

} );
