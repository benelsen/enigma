var _ = require('underscore');

module.exports = Rotor;

var alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Rotor(wiring, notch, name, fixed) {

  this.position = 0;    // Enigmas start with 01
  this.ringsetting = 0; // ring setting - Ringstellung
  this.fixed = fixed ? true : false;

  if ( name && 'string' === typeof name) {
    this.name = name;
  }

  var wiring = _.uniq(wiring);
  var notch = _.uniq(notch);

  if ( wiring.length === 26 && (notch.length === 1 || notch.length === 2 || this.fixed ) ) {
    this.wiring = wiring;
    this.notch  = notch;
    return this;
  } else {
    throw new Error("The rotors must have 26 letters, one or two turnover notches are allowed");
  }

}

Rotor.prototype.signal = function(input, reverse) {
  var pos, signal;

  pos = alph.indexOf(input);
  pos = ( pos + this.position + 26 - this.ringsetting) % 26;

  signal = alph[pos];

  if ( reverse ) pos = this.wiring.indexOf(signal);

  signal = reverse ? alph[pos] : this.wiring[pos];

  pos = alph.indexOf(signal);
  pos = ( pos + ( 26 - this.position + this.ringsetting ) ) % 26;

  signal = alph[pos];
  return signal;
}

Rotor.prototype.inNotch = function() {
  if ( this.fixed ) return false;

  var inNotch = false;

  for (var i = 0; i < this.notch.length; i++) {
    if( this.position === alph.indexOf(this.notch[i]) ) {
      inNotch = true;
      break;
    }
  };

  return inNotch;
}

Rotor.prototype.rotate = function() {
  this.position = (this.position + 1) % 26;
}

Rotor.prototype.getPosition = function() {
  return alph[this.position];
}

Rotor.prototype.setPosition = function(position) {
  this.position = alph.indexOf(position);
}

Rotor.prototype.getRingSetting = function() {
  return alph[this.ringsetting];
}

Rotor.prototype.setRingSetting = function(setting) {
  this.ringsetting = alph.indexOf(setting);
}
