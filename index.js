
var Enigma         = require('./lib/enigma');
var Rotor          = require('./lib/rotor');
var Umkehrwalze    = require('./lib/umkehrwalze');
var Eintrittswalze = require('./lib/eintrittswalze');
var Steckerbrett   = require('./lib/steckerbrett');

module.exports = {
  Enigma: Enigma,

  Rotor: Rotor,

  Umkehrwalze: Umkehrwalze,
  Reflector: Umkehrwalze,

  Eintrittswalze: Eintrittswalze,
  EntryWheel: Eintrittswalze,

  Steckerbrett: Steckerbrett,
  Plugboard: Steckerbrett
};
