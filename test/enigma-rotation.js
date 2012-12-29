var assert = require('assert');
var _ = require('underscore');

var enigmajs = require('..');

// Creating the components of the machine

var eintrittswalzen = [];
eintrittswalzen.push( new enigmajs.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ') );

var rotoren = [];
rotoren.push( new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q',  'I') );
rotoren.push( new enigmajs.Rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE', 'E',  'II') );
rotoren.push( new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V',  'III') );
rotoren.push( new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J',  'IV') );
rotoren.push( new enigmajs.Rotor('VZBRGITYUPSDNHLXAWMJQOFECK', 'Z',  'V') );
// rotoren.push( new enigmajs.Rotor('JPGVOUMFYQBENHZRDKASXLICTW', 'ZM', 'VI') );
// rotoren.push( new enigmajs.Rotor('NZJHGRCXMYSWBOUFAIVLPEKQDT', 'ZM', 'VII') );
// rotoren.push( new enigmajs.Rotor('FKQHTLXOCBJSPDZRAMEWNIUYGV', 'ZM', 'VIII') );

var umkehrwalzen = [];
umkehrwalzen.push( new enigmajs.Umkehrwalze('EJMZALYXVBWFCRQUONTSPIKHGD') );
umkehrwalzen.push( new enigmajs.Umkehrwalze('YRUHQSLDPXNGOKMIEBFZCWVJAT') );
umkehrwalzen.push( new enigmajs.Umkehrwalze('FVPJIAOYEDRZXWGCTKUQSBNMHL') );

var steckerbrett = new enigmajs.Steckerbrett('');

var enigma;

var array = rotoren;
var permutations = [];

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array.length; j++) {
    for (var k = 0; k < array.length; k++) {
      if ( i !== j && i !== k && j !== k )
        permutations.push([array[i], array[j], array[k]]);
    };
  };
};

describe('Enigma', function(){

  describe('#getPositions()', function() {

    it('should have position `AAA` after 16901 calls of #rotate()', function() {

      for (var i = 0; i < eintrittswalzen.length; i++) {
        var eintrittswalze = eintrittswalzen[i];

        for (var j = 0; j < umkehrwalzen.length; j++) {
          var ukw = umkehrwalzen[j];

          for (var k = 0; k < permutations.length; k++) {

            enigma = null;
            enigma = new enigmajs.Enigma(permutations[k], ukw, steckerbrett, eintrittswalze);

            enigma.setPositions('AAA');
            enigma.setRingSettings('AAA');

            for (var i = 1; i < (26*25*26+1); i++) {
              enigma.rotate();
            };

            assert.equal(enigma.getPositions(), 'AAA');

          };
        };
      };

    });
  });
});
