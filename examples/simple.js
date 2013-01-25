var enigmajs = require('../');

var rotorI        = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
var rotorIII      = new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
var rotorIV       = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
var ukwB          = new enigmajs.Umkehrwalze('YRUHQSLDPXNGOKMIEBFZCWVJAT');
var steckerbrett  = new enigmajs.Steckerbrett( 'AD CN ET FL GI JV KZ PU QY WX' );
var etw           = new enigmajs.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var enigma = new enigmajs.Enigma([rotorI, rotorIV, rotorIII], ukwB, steckerbrett, etw);

console.log( enigma.string( 'EXAMPLEMESSAGE' ) );
