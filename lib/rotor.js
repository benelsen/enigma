
var Walze = require('./walze');

module.exports = Rotor;

function Rotor(wiring, notches, name) {

  this.position     = 0; // Enigmas start with 01
  this.ringsetting  = 0; // ring setting - Ringstellung

  this.setWiring(wiring);
  this.setNotches(notches);
  this.setName(name);

  return this;
}

Rotor.prototype = new Walze();

Rotor.prototype.signal = function(signal, reverse) {
  var pos;

  pos = this.alphabet.indexOf(signal);
  pos = ( pos + this.position + (this.alphabet.length) - this.ringsetting) % (this.alphabet.length);

  signal = this.alphabet[pos];

  if ( reverse ) pos = this.wiring.indexOf(signal);

  signal = reverse ? this.alphabet[pos] : this.wiring[pos];

  pos = this.alphabet.indexOf(signal);
  pos = ( pos + ( (this.alphabet.length) - this.position + this.ringsetting ) ) % (this.alphabet.length);

  signal = this.alphabet[pos];
  return signal;
};

Rotor.prototype.rotate = function() {
  this.position = (this.position + 1) % (this.alphabet.length);
};

Rotor.prototype.inNotch = function() {
  var inNotch = false;

  for (var i = 0; i < this.notches.length; i++) {
    if( this.position === this.alphabet.indexOf(this.notches[i]) ) {
      inNotch = true;
      break;
    }
  }

  return inNotch;
};

Rotor.prototype.setNotches = function(notches) {

  if ( typeof notches === 'string' ) {
    notches = notches.toUpperCase().split('');

  } else if ( typeof notches === 'object' && notches instanceof Array ) {
    notches = notches.map(function(e) {
      return e.toString().toUpperCase();
    });

  } else {
    notches = [];
  }

  if ( notches.some( function(e,i,l){ return l.indexOf(e) !== l.lastIndexOf(e);} ) ) {
    throw new Error('notches has to consist of unique characters');
  }
  if ( notches.length > this.alphabet.length ) {
    throw new Error('you can’t have more notches than characters on the rotor');
  }

  this.notches = notches;
};

Rotor.prototype.getPosition = function() {
  return this.alphabet[this.position];
};

Rotor.prototype.setPosition = function(position) {
  this.position = this.alphabet.indexOf(position);
};

Rotor.prototype.getRingSetting = function() {
  return this.alphabet[this.ringsetting];
};

Rotor.prototype.setRingSetting = function(setting) {
  this.ringsetting = this.alphabet.indexOf(setting);
};
