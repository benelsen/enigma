var _ = require('underscore');

var alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

exports.Steckerbrett = Steckerbrett;

function Steckerbrett(stecker) {

  var pairs = stecker.split(' ');

  var wiring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('');

    var posL = alph.indexOf(pair[0]);
    var posR = alph.indexOf(pair[1]);

    wiring[posL] = pair[1];
    wiring[posR] = pair[0];
  };

  var wiring = _.uniq(wiring);

  if ( wiring.length === 26 && pairs.length <= 13 ) {
    this.wiring = wiring;
    return this;
  } else {
    throw new Error("The Steckerbrett only allows for 13 connections to be set");
  }

}

Steckerbrett.prototype.signal = function(signal, reverse) {

  var pos = reverse ? this.wiring.indexOf(signal) : alph.indexOf(signal);
  signal = reverse ? alph[pos] : this.wiring[pos];

  return signal;
}
