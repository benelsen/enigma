
module.exports = Steckerbrett;

function Steckerbrett(pairs) {

  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if ( typeof pairs === 'string' ) {
    pairs = pairs.split(' ');
  }

  var wiring = this.alphabet.slice();

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('');
    wiring[ this.alphabet.indexOf(pair[0]) ] = pair[1];
    wiring[ this.alphabet.indexOf(pair[1]) ] = pair[0];
  };

  if ( wiring.some( function(e,i,l){ return l.indexOf(e) !== l.lastIndexOf(e);} ) ) {
    throw new Error('pairs has to be a set of pairs with unique characters');
  }

  if ( wiring.length > this.alphabet.length || pairs.length > Math.floor( this.alphabet.length/2 ) ) {
    throw new Error('The Steckerbrett only allows for ' + Math.floor( this.alphabet.length/2 ) + ' connections to be set');
  }

  this.wiring = wiring;
  return this;
}

Steckerbrett.prototype.signal = function(signal, reverse) {
  var pos = reverse ? this.wiring.indexOf(signal) : this.alphabet.indexOf(signal);
  signal = reverse ? this.alphabet[pos] : this.wiring[pos];
  return signal;
}
