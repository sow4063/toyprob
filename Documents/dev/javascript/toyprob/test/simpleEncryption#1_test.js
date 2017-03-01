var chai = require('chai');
var assert = chai.assert;
var encrypt = require('../js/simpleEncryption#1.js');

describe("Solution", function(){
  it("EncryptExampleTests", function(){
    assert.equal(encrypt("This is a test!", 0), "This is a test!");
    assert.equal(encrypt("This is a test!", 1), "hsi  etTi sats!");
    assert.equal(encrypt("This is a test!", 2), "s eT ashi tist!");
    assert.equal(encrypt("This is a test!", 3), " Tah itse sits!");
    assert.equal(encrypt("This is a test!", 4), "This is a test!");
    assert.equal(encrypt("This is a test!", -1), "This is a test!");
    assert.equal(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){
    assert.equal(decrypt("This is a test!", 0), "This is a test!");
    assert.equal(decrypt("hsi  etTi sats!", 1), "This is a test!");
    assert.equal(decrypt("s eT ashi tist!", 2), "This is a test!");
    assert.equal(decrypt(" Tah itse sits!", 3), "This is a test!");
    assert.equal(decrypt("This is a test!", 4), "This is a test!");
    assert.equal(decrypt("This is a test!", -1), "This is a test!");
    assert.equal(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    assert.equal(encrypt("", 0), "");
    assert.equal(decrypt("", 0), "");
    assert.equal(encrypt(null, 0), null);
    assert.equal(decrypt(null, 0), null);
  });
});
