
module.exports = Eintrittswalze;

function Eintrittswalze(wiring, name) {

  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if ( typeof wiring === 'undefined') {
    wiring = this.alphabet.slice();
  }

  if ( 'string' === typeof wiring) {
    wiring = wiring.split('');
  }

  if ( 'string' === typeof name) {
    this.name = name;
  }

  if ( wiring.some(function(e,i,l){ return l.indexOf(e) !== l.lastIndexOf(e);}) || wiring.length !== this.alphabet.length ) {
    throw new Error('The Eintrittswalze must have ' + (this.alphabet.length) + ' unique characters.');
  }

  this.wiring = wiring;
  return this;
}

Eintrittswalze.prototype.signal = function(signal, reverse) {
  var pos = reverse ? this.wiring.indexOf(signal) : this.alphabet.indexOf(signal);
  signal  = reverse ? this.alphabet[pos] : this.wiring[pos];
  return signal;
}
