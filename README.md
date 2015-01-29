# enigma

Implementation of an enigma machine

[![Build Status](https://travis-ci.org/benelsen/enigma.png?branch=master)](https://travis-ci.org/benelsen/enigma)
[![Join the chat at https://gitter.im/benelsen/enigma](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benelsen/enigma?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installation

    $ npm install enigma

## Example

```js

var enigmajs = require('enigma');

var rotorI        = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
var rotorIII      = new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
var rotorIV       = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
var reflector     = new enigmajs.Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');
var plugboard     = new enigmajs.Plugboard( 'AD CN ET FL GI JV KZ PU QY WX' );
var entryWheel    = new enigmajs.EntryWheel('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var enigma = new enigmajs.Enigma([rotorI, rotorIV, rotorIII], reflector, plugboard, entryWheel);

console.log( enigma.string( 'EXAMPLEMESSAGE' ) );
```
Prints out `RRHIUUFUVJLJYY`

You should also have a look at [this test](test/enigma-realmessage.js) which demonstrates a more realistic procedure to cipher/decipher a message.

## License

[MIT](LICENSE)
