
function shuffle(array) {
  var tmp, current, top = array.length;

  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }

  return array;
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Walze = require('../lib/walze');

describe('Walze', function() {

  it('should set alphabet as wiring when passing no arguments', function() {
    var etw = new Walze();
    etw.wiring.should.eql(alphabet.split(''));
  });

  it('should set wiring when passing array of strings/chars', function() {
    var testSequence = shuffle( alphabet.split('') );

    var etw = new Walze(testSequence);
    etw.wiring.should.eql(testSequence);
  });

  it('should set wiring when passing string', function() {
    var testSequence = shuffle( alphabet.split('') );

    var etw = new Walze(testSequence.join(''));
    etw.wiring.should.eql(testSequence);
  });

  describe('#signal()', function() {

    it('should return the same character', function() {
      var testChar = shuffle( alphabet.split('') ).join('').substr(0,1);

      var etw = new Walze(alphabet);
      etw.signal(testChar).should.eql(testChar);
    });

    it('should return the next character', function() {
      var testSequence = alphabet.substr(1) + alphabet.substr(0,1);
      var testCharIndex = Math.floor( 25 * Math.random() );

      var etw = new Walze(testSequence);
      etw.signal(alphabet.substr(testCharIndex,1)).should.eql(testSequence.substr(testCharIndex,1));
    });

    it('should return the previous character', function() {
      var testSequence = alphabet.substr(1) + alphabet.substr(0,1);
      var testCharIndex = Math.floor( 2 + 23 * Math.random() );

      var etw = new Walze(testSequence);
      etw.signal(alphabet.substr(testCharIndex,1), true).should.eql(testSequence.substr(testCharIndex-2,1));
    });

  });
});
