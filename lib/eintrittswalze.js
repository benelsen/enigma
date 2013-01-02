
var Walze = require('./walze');

module.exports = Eintrittswalze;

function Eintrittswalze(wiring, name) {

  this.setWiring(wiring);
  this.setName(name);

  return this;
}

Eintrittswalze.prototype = new Walze();
