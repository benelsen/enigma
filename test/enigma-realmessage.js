/*
 * Three rotor Enigma end-to-end
 */

var test = require('tape');

var enigmajs = require('..');

// Message taken from http://de.wikipedia.org/wiki/Enigma_(Maschine)#Funkspruch
var plaintext     = 'DASOBERKOMMANDODERWEHRMAQTGIBTBEKANNTXAACHENXAACHENXISTGERETTETXDURQGEBUENDELTENEINSATZDERHILFSKRAEFTEKONNTEDIEBEDROHUNGABGEWENDETUNDDIERETTUNGDERSTADTGEGENXEINSXAQTXNULLXNULLXUHRSIQERGESTELLTWERDENX';
var cipherTest    = 'LJPQHSVDWCLYXZQFXHIUVWDJOBJNZXRCWEOTVNJCIONTFQNSXWISXKHJDAGDJVAKUKVMJAJHSZQQJHZOIAVZOWMSCKASRDNXKKSRFHCXCMPJGXYIJCCKISYYSHETXVVOVDQLZYTNJXNUWKZRXUJFXMBDIBRVMJKRHTCUJQPTEEIYNYNJBEAQJCLMUODFWMARQCFOBWN';
var stecker       = 'AD CN ET FL GI JV KZ PU QY WX';
var ringSettings  = 'PZH';
var startPosition = 'QWE';
var messageKey    = 'RTZ';
var encMessageKey = 'EWG';

// Setup the Enigma
var etw = new enigmajs.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var rotorI   = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
var rotorIII = new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
var rotorIV  = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');

var ukwB = new enigmajs.Umkehrwalze('YRUHQSLDPXNGOKMIEBFZCWVJAT');

var steckerbrett = new enigmajs.Steckerbrett( stecker );

var enigma = new enigmajs.Enigma([rotorI, rotorIV, rotorIII], ukwB, steckerbrett, etw);
enigma.setRingSettings( ringSettings );

// Encipher the message key
enigma.setPositions( startPosition );

var cipheredMessageKey = enigma.string( messageKey );

test('Encipher the message key', function (t) {
  t.plan(1);
  t.equal(cipheredMessageKey, encMessageKey, 'should match');
});

// Encipher the message
enigma.setPositions( messageKey );

var cipheredText = enigma.string( plaintext );

test('Encipher the message', function (t) {
  t.plan(1);
  t.equal(cipheredText, cipherTest, 'should match');
});

// Reset the enigma
enigma.setPositions( startPosition );

// Decipher the message key
var decipheredMessageKey = enigma.string( cipheredMessageKey );

test('Decipher the message key', function (t) {
  t.plan(1);
  t.equal(decipheredMessageKey, messageKey, 'should match');
});

// Set the the message key
enigma.setPositions( decipheredMessageKey );

// Decipher the message
var decipheredText = enigma.string( cipheredText );

test('Decipher the message', function (t) {
  t.plan(1);
  t.equal(decipheredText, plaintext, 'should match');
});
