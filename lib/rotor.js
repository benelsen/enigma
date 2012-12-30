
module.exports = Rotor;

function Rotor(wiring, notches, name) {

  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  this.position     = 0; // Enigmas start with 01
  this.ringsetting  = 0; // ring setting - Ringstellung

  // wiring
  if ( typeof wiring === 'string' ) {
    wiring = wiring.split('');
  }

  if ( wiring.some( function(e,i,l){ return l.indexOf(e) !== l.lastIndexOf(e);} ) ) {
    throw new Error('wiring has to consist of unique characters');
  }
  if ( wiring.length !== this.alphabet.length ) {
    throw new Error('wiring has to have the same length of the used alphabet');
  }

  this.wiring = wiring.map(function(e){ return e.toString().toUpperCase() });;

  // notches
  if ( typeof notches === 'string' ) {
    notches = notches.split('');
  }

  if ( notches.some( function(e,i,l){ return l.indexOf(e) !== l.lastIndexOf(e);} ) ) {
    throw new Error('notches has to consist of unique characters');
  }
  if ( notches.length > this.alphabet.length ) {
    throw new Error('You can’t have more notches than characters on the rotor');
  }

  // normalization
  this.notches = notches.map(function(e){ return e.toString().toUpperCase() });

  // name
  if ( 'string' === typeof name ) {
    this.name = name;
  }

  return this;
}

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
}

Rotor.prototype.inNotch = function() {
  if ( this.notches.length === 0 ) return false;

  var inNotch = false;

  for (var i = 0; i < this.notches.length; i++) {
    if( this.position === this.alphabet.indexOf(this.notches[i]) ) {
      inNotch = true;
      break;
    }
  };

  return inNotch;
}

Rotor.prototype.rotate = function() {
  this.position = (this.position + 1) % (this.alphabet.length);
}

Rotor.prototype.getPosition = function() {
  return this.alphabet[this.position];
}

Rotor.prototype.setPosition = function(position) {
  this.position = this.alphabet.indexOf(position);
}

Rotor.prototype.getRingSetting = function() {
  return this.alphabet[this.ringsetting];
}

Rotor.prototype.setRingSetting = function(setting) {
  this.ringsetting = this.alphabet.indexOf(setting);
}
