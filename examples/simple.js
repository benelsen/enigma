var enigmajs = require('../');

var rotorI        = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
var rotorIII      = new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
var rotorIV       = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
var reflector     = new enigmajs.Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');
var plugboard     = new enigmajs.Plugboard( 'AD CN ET FL GI JV KZ PU QY WX' );
var entryWheel    = new enigmajs.EntryWheel('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var enigma = new enigmajs.Enigma([rotorI, rotorIV, rotorIII], reflector, plugboard, entryWheel);

console.log( enigma.string( 'EXAMPLEMESSAGE' ) );
