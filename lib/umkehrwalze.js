
var Walze = require('./walze');

module.exports = Umkehrwalze;

function Umkehrwalze(wiring, name) {

  this.setWiring(wiring);
  this.setName(name);

  return this;
}

Umkehrwalze.prototype = new Walze();
