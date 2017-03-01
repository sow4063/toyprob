var chai = require('chai');
var assert = chai.assert;
var searchNames = require('../js/javascriptFilter3.js');

describe( "Testing a list", function() {

  it( "Basic list", function() {
    var a = [ "foo", "foo@foo.com", "bar.", "bar@bar.com" ],
    b = [ "bar@bar.com" ];

    assert.equal( searchNames( a ).join(''), b.join('') );
  } );

  it("should equal", function()  {
    var a = ['foo', 'foo@foo.com', 'bar.', 'bar@bar.com', 'foobar', 'hello@dot.com', '.barfoo', 'barfoo@t.com'];
    b = ['bar@bar.com', 'barfoo@t.com'];

    assert.equal( searchNames( a ).join(''), b.join('') );
  } );

  it("mixed dots", function()  {
    var a = ['f.o.o', 'foo@foo.com', 'bar.', 'bar@bar.com', '.b.a.r', 'foobar@fb.com', '.b.a.r.f.o.o.t.', 'bar_foo@fb.com'];
    b = ['bar@bar.com', 'foobar@fb.com', 'bar_foo@fb.com'];

    assert.equal( searchNames( a ).join(''), b.join('') );
  } );


} );
