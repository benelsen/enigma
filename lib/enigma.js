
module.exports = Enigma;

function Enigma(rotors, ukw, steckerbrett, etw) {

  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if ( (rotors.length < 3 || rotors.length > 4) && typeof ukw === 'undefined' && typeof steckerbrett === 'undefined' && typeof etw === 'undefined') {
    throw new Error('Only three or four rotors are supported.');
  }

  this.rotors = rotors;
  this.ukw = ukw;
  this.steckerbrett = steckerbrett;
  this.etw = etw;

  return this;
}

Enigma.prototype.signal = function(signal) {
  // Rotate by 1 step
  this.rotate();
  // Send signal through the Steckerbrett
  signal = this.steckerbrett.signal(signal);
  // Send signal through the Eintrittswalze
  signal = this.etw.signal(signal);

  // Send signal through every rotor
  for (var i = this.rotors.length - 1; i >= 0; i--) {
    signal = this.rotors[i].signal(signal);
  }

  // Send signal through the Umkehrwalze
  signal = this.ukw.signal(signal);

  // Send signal through every rotor in reverse direction
  for (var j = 0; j < this.rotors.length; j++) {
    signal = this.rotors[j].signal(signal, true);
  }

  // Send signal through the Eintrittswalze in reverse direction
  signal = this.etw.signal(signal, true);
  // Send signal through the Steckerbrett in reverse direction
  signal = this.steckerbrett.signal(signal, true);

  return signal;
};

Enigma.prototype.rotate = function() {
  var notched = [];
  var turned = [];

  for (var i = 0; i < this.rotors.length; i++) {
    turned[i] = false;
    notched.push( this.rotors[i].inNotch() );
  }

  for (var j = this.rotors.length - 1; j >= 0; j--) {
    if ( (j === this.rotors.length - 1) || ( turned[j+1] && notched[j+1] ) || ( turned[j+1] && notched[j] && j > 0 ) ) {
      this.rotors[j].rotate();
      turned[j] = true;
    }
  }

};

Enigma.prototype.string = function(string) {
  string = typeof string === 'string' ? string.toUpperCase().split('') : string;

  var res = '';
  for (var i = 0; i < string.length; i++) {
    res += this.signal(string[i]);
  }
  return res;
};

Enigma.prototype.getPositions = function(){
  var str = '';
  for (var i = 0; i < this.rotors.length; i++) {
    str += this.rotors[i].getPosition();
  }
  return str;
};

Enigma.prototype.setPositions = function(positions) {
  positions = positions.split('');
  for (var i = 0; i < this.rotors.length; i++) {
    this.rotors[i].setPosition(positions[i]);
  }
};

Enigma.prototype.getRingSettings = function() {
  var str = '';
  for (var i = 0; i < this.rotors.length; i++) {
    str += this.rotors[i].getRingSetting();
  }
  return str;
};

Enigma.prototype.setRingSettings = function(settings) {
  settings = settings.split('');
  for (var i = 0; i < this.rotors.length; i++) {
    this.rotors[i].setRingSetting(settings[i]);
  }
};
