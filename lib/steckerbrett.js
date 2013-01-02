
var Walze = require('./walze');

module.exports = Steckerbrett;

function Steckerbrett(plugs, name) {

  this.setName(name);
  this.setPlugs(plugs);

  return this;
}

Steckerbrett.prototype = new Walze();

Steckerbrett.prototype.setPlugs = function(plugs) {

  if ( typeof plugs === 'string' ) {
    plugs = plugs.toUpperCase().split(' ');

  } else if ( typeof plugs === 'object' && plugs instanceof Array ) {
    plugs = plugs.map(function(e) {
      return e.toString().toUpperCase();
    });

  } else {
    plugs = [];
  }

  var wiring = this.alphabet.slice();

  for (var i = 0; i < plugs.length; i++) {
    var plug = plugs[i].split('');
    wiring[ this.alphabet.indexOf(plug[0]) ] = plug[1];
    wiring[ this.alphabet.indexOf(plug[1]) ] = plug[0];
  }

  if ( wiring.length > this.alphabet.length || plugs.length > Math.floor( this.alphabet.length/2 ) ) {
    throw new Error('The Steckerbrett only allows for ' + Math.floor( this.alphabet.length/2 ) + ' connections to be set');
  }

  this.setWiring(wiring);

};
