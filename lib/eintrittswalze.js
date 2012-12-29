var _ = require('underscore');

module.exports = Eintrittswalze;

var alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Eintrittswalze(wiring, name) {

  if ( name && 'string' === typeof name) {
    this.name = name;
  }

  var wiring = _.uniq(wiring);

  if ( wiring.length === 26 ) {
    this.wiring = wiring;
    return this;
  } else {
    throw new Error("The Eintrittswalzen must have 26 letters.");
  }

}

Eintrittswalze.prototype.signal = function(input) {
  var inputPos  = alph.indexOf(input);
  var output = this.wiring[inputPos];
  return output;
}
