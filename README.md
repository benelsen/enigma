# enigma
  Implementation of an enigma machine

## Installation
  
    $ npm install enigma

## Example

```js

var enigmajs = require('enigma');

var rotorI        = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
var rotorIII      = new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
var rotorIV       = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
var ukwB          = new enigmajs.Umkehrwalze('YRUHQSLDPXNGOKMIEBFZCWVJAT');
var steckerbrett  = new enigmajs.Steckerbrett( 'AD CN ET FL GI JV KZ PU QY WX' );
var etw           = new enigmajs.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var enigma = new enigmajs.Enigma([rotorI, rotorIV, rotorIII], ukwB, steckerbrett, etw);

console.log( enigma.string( 'EXAMPLEMESSAGE' ) );
```
Prints out `RRHIUUFUVJLJYY`

You should also have a look at [this test](test/enigma-realmessage.js) which demonstrates a more realistic procedure to cipher/decipher a message.

## Testing
  
    $ npm test

  [![Build Status](https://travis-ci.org/benelsen/enigma.png?branch=master)](https://travis-ci.org/benelsen/enigma)

## License

[MIT](LICENSE)
