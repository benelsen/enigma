var _ = require('underscore');

module.exports = Enigma;

var alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Enigma(rotors, ukw, steckerbrett, etw) {

  if ( (rotors.length === 3 || rotors.length === 4) && ukw && steckerbrett && etw) {
    this.rotors = rotors;
    this.ukw = ukw;
    this.steckerbrett = steckerbrett;
    this.etw = etw;
  } else {
    throw new Error('Only three rotors are supported.');
  }

}

Enigma.prototype.signal = function(signal) {

  this.rotate();

  signal = this.steckerbrett.signal(signal);

  signal = this.etw.signal(signal);

  for (var i = this.rotors.length - 1; i >= 0; i--) {
    signal = this.rotors[i].signal(signal);
  };

  signal = this.ukw.signal(signal);

  for (var i = 0; i < this.rotors.length; i++) {
    signal = this.rotors[i].signal(signal, true);
  };

  signal = this.etw.signal(signal);

  signal = this.steckerbrett.signal(signal, true);

  return signal;
}

Enigma.prototype.rotate = function() {

  var notched = [];
  var turned = [];

  for (var i = 0; i < this.rotors.length; i++) {
    turned[i] = false;
    notched.push( this.rotors[i].inNotch() );
  };

  for (var i = this.rotors.length - 1; i >= 0; i--) {

    if ( (i === this.rotors.length - 1) || ( turned[i+1] && notched[i+1] ) || ( turned[i+1] && notched[i] && i > 0 ) ) {
      this.rotors[i].rotate();
      turned[i] = true;
    }

  };

}

Enigma.prototype.string = function(string) {
  string = string.toUpperCase();

  var sequence = _.map( string.split(''), function(l) {
    return alph.indexOf(l) > -1 ? l : 'X';
  });

  var res = '';

  for (var i = 0; i < sequence.length; i++) {
    res += this.signal(sequence[i]);
  };

  return res;
}

Enigma.prototype.getPositions = function(){
  var str = '';
  for (var i = 0; i < this.rotors.length; i++) {
    str += this.rotors[i].getPosition();
  };
  return str;
}

Enigma.prototype.setPositions = function(positions) {
  positions = positions.split('');
  for (var i = 0; i < this.rotors.length; i++) {
    this.rotors[i].setPosition(positions[i]);
  };
}

Enigma.prototype.getRingSettings = function() {
  var str = '';
  for (var i = 0; i < this.rotors.length; i++) {
    str += this.rotors[i].getRingSetting();
  };
  return str;
}

Enigma.prototype.setRingSettings = function(settings) {
  settings = settings.split('');
  for (var i = 0; i < this.rotors.length; i++) {
    this.rotors[i].setRingSetting(settings[i]);
  };
}
