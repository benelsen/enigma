var _ = require('underscore');

var alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

exports.Eintrittswalze = Eintrittswalze;

function Eintrittswalze(wiring, name) {

  if ( name && 'string' === typeof name) {
    this.name = name;
  }

  var wiring = _.uniq(wiring);

  if ( wiring.length === 26 ) {
    this.wiring = wiring;
    return this;
  } else {
    throw new Error("The umkehrwalzen must have 26 letters making up 13 pairs.");
  }

}

Eintrittswalze.prototype.signal = function(input) {
  var inputPos  = alph.indexOf(input);
  var output = this.wiring[inputPos];
  return output;
}
