var assert = require('chai').assert;
var DocumentParser = require('../js/wordCount.js');

function FileReaderSimulator(text)
{
  var index = -1;
  this.getChunk = function()
  {
    index++;
    return index == text.length ? "" : text.charAt(index);
  };
}

var fileContent = "Once upon a time",
  reader = new FileReaderSimulator(fileContent),
  parser = new DocumentParser(reader);

describe('Word, char, line count', function() {
  it('Basic Tests', function() {
    parser.parse();

    assert.equal(parser.charCount, 16);
    assert.equal(parser.wordCount, 4);
    assert.equal(parser.lineCount, 1);
  });
});
