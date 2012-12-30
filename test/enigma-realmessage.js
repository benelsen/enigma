var assert = require('assert');

var enigmajs = require('..');

// Message taken from http://de.wikipedia.org/wiki/Enigma_(Maschine)#Funkspruch
var plaintext     = 'DASOBERKOMMANDODERWEHRMAQTGIBTBEKANNTXAACHENXAACHENXISTGERETTETXDURQGEBUENDELTENEINSATZDERHILFSKRAEFTEKONNTEDIEBEDROHUNGABGEWENDETUNDDIERETTUNGDERSTADTGEGENXEINSXAQTXNULLXNULLXUHRSIQERGESTELLTWERDENX';
var cipherTest    = 'LJPQHSVDWCLYXZQFXHIUVWDJOBJNZXRCWEOTVNJCIONTFQNSXWISXKHJDAGDJVAKUKVMJAJHSZQQJHZOIAVZOWMSCKASRDNXKKSRFHCXCMPJGXYIJCCKISYYSHETXVVOVDQLZYTNJXNUWKZRXUJFXMBDIBRVMJKRHTCUJQPTEEIYNYNJBEAQJCLMUODFWMARQCFOBWN';
var stecker       = 'AD CN ET FL GI JV KZ PU QY WX';
var ringSettings  = 'PZH';
var startPosition = 'QWE';
var messageKey    = 'RTZ';
var encMessageKey = 'EWG';

var etw = new enigmajs.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var rotorI   = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
var rotorIII = new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
var rotorIV  = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');

var ukwB = new enigmajs.Umkehrwalze('YRUHQSLDPXNGOKMIEBFZCWVJAT');

var steckerbrett = new enigmajs.Steckerbrett( stecker );

var enigma = new enigmajs.Enigma([rotorI, rotorIV, rotorIII], ukwB, steckerbrett, etw);
enigma.setRingSettings( ringSettings );
enigma.setPositions( startPosition );

// Encipher the message key
var cipheredMessageKey = enigma.string( messageKey );

enigma.setPositions( messageKey );

// Cipher the text
var cipheredText = enigma.string( plaintext );

// Reset the enigma
enigma.setPositions( startPosition );

// Decipher the message key
var decipheredMessageKey = enigma.string( cipheredMessageKey );

// Set the the message key
enigma.setPositions( decipheredMessageKey );

// Decipher the text
var decipheredText = enigma.string( cipheredText );


describe('Three rotor Enigma end-to-end test', function(){

  it('cipheredMessageKey should be an exact match of encMessageKey', function() {
    cipheredMessageKey.should.equal( encMessageKey );
  });

  it('cipheredText should be an exact match of cipherTest', function() {
    cipheredText.should.equal( cipherTest);
  });

  it('decipheredMessageKey should be an exact match of messageKey', function() {
    decipheredMessageKey.should.equal( messageKey );
  });

  it('decipheredText should be an exact match of plaintext', function() {
    decipheredText.should.equal( plaintext );
  });

});
