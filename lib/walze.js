
module.exports = Walze;

function Walze(wiring, name) {

  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  this.setWiring(wiring);
  this.setName(name);

  return this;
}

Walze.prototype.setWiring = function(wiring) {

  if ( 'string' === typeof wiring) {
    wiring = wiring.toUpperCase().split('');

  } else if ( typeof wiring === 'object' && wiring instanceof Array) {
    wiring = wiring.map(function(e) {
      return e.toString().toUpperCase();
    });

  } else {
    wiring = this.alphabet.slice();
  }

  if ( wiring.some(function(e,i,l){ return l.indexOf(e) !== l.lastIndexOf(e);}) || wiring.length !== this.alphabet.length ) {
    throw new Error('The Walze must have ' + (this.alphabet.length) + ' unique characters.');
  }

  this.wiring = wiring;
}

Walze.prototype.setName = function(name) {

  if ( 'string' === typeof name) {
    this.name = name;
  }

}

Walze.prototype.signal = function(signal, reverse) {
  var pos = reverse ? this.wiring.indexOf(signal) : this.alphabet.indexOf(signal);
  signal  = reverse ? this.alphabet[pos] : this.wiring[pos];
  return signal;
}
