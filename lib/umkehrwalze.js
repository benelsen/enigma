
module.exports = Umkehrwalze;

function Umkehrwalze(wiring, name) {

  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if ( 'string' === typeof wiring) {
    wiring = wiring.split('');
  }

  if ( 'string' === typeof name) {
    this.name = name;
  }

  if ( wiring.some(function(e,i,l){ return l.indexOf(e) !== l.lastIndexOf(e);}) || wiring.length !== this.alphabet.length ) {
    throw new Error('The Umkehrwalze must have ' + (this.alphabet.length) + ' unique characters.');
  }

  this.wiring = wiring;
  return this;
}

Umkehrwalze.prototype.signal = function(signal, reverse) {
  var pos = reverse ? this.wiring.indexOf(signal) : this.alphabet.indexOf(signal);
  signal  = reverse ? this.alphabet[pos] : this.wiring[pos];
  return signal;
}
