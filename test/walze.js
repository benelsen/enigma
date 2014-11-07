
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

  it('should set defaults if constructor is called without arguments', function() {
    var walze = new Walze();
    walze.name.should.eql('');
    walze.wiring.should.eql(alphabet.split(''));
  });

  describe('#alphabet', function() {

    it('should exist ', function() {
      var walze = new Walze();
      walze.should.have.property('alphabet');
    });

    it('should be set to alphabet', function() {
      var walze = new Walze();
      walze.alphabet.should.eql(alphabet.split(''));
    });

  });


  describe('#setName()', function() {

    it('should be a function', function() {
      var walze = new Walze();
      walze.setName.should.be.a.Function;
    });

    it('should set empty string if no argument is passed', function() {
      var walze = new Walze();
      walze.setName();
      walze.name.should.equal('');
    });

    it('should set empty string to the string that passed', function() {
      var testName = shuffle( alphabet.split('') ).join('');
      var walze = new Walze();
      walze.setName(testName);
      walze.name.should.equal(testName);
    });

  });


  describe('#setWiring()', function() {

    it('should be a function', function() {
      var walze = new Walze();
      walze.setWiring.should.be.a.Function;
    });

    it('should set alphabet as wiring when passing no arguments', function() {
      var walze = new Walze();
      walze.setWiring();
      walze.wiring.should.eql(alphabet.split(''));
    });

    it('should set wiring when passing array of strings/chars', function() {
      var testSequence = shuffle( alphabet.split('') );
      var walze = new Walze();
      walze.setWiring(testSequence);
      walze.wiring.should.eql(testSequence);
    });

    it('should set wiring when passing string', function() {
      var testSequence = shuffle( alphabet.split('') );
      var walze = new Walze();
      walze.setWiring(testSequence.join(''));
      walze.wiring.should.eql(testSequence);
    });

  });


  describe('#signal()', function() {

    it('should be a function', function() {
      var walze = new Walze();
      walze.signal.should.be.a.Function;
    });

    it('should return the same character', function() {
      var testChar = shuffle( alphabet.split('') ).join('').substr(0,1);

      var walze = new Walze(alphabet);
      walze.signal(testChar).should.eql(testChar);
    });

    it('should return the next character', function() {
      var testSequence = alphabet.substr(1) + alphabet.substr(0,1);
      var testCharIndex = Math.floor( 25 * Math.random() );

      var walze = new Walze(testSequence);
      walze.signal(alphabet.substr(testCharIndex,1)).should.eql(testSequence.substr(testCharIndex,1));
    });

    it('should return the previous character', function() {
      var testSequence = alphabet.substr(1) + alphabet.substr(0,1);
      var testCharIndex = Math.floor( 2 + 23 * Math.random() );

      var walze = new Walze(testSequence);
      walze.signal(alphabet.substr(testCharIndex,1), true).should.eql(testSequence.substr(testCharIndex-2,1));
    });

  });
});
