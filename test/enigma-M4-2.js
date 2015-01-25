/*
 * Four rotor Enigma #2
 */

var test = require('tape');

var enigmajs = require('..');

// Message taken from http://www.bytereef.org/m4-project-second-break.html
var plaintext    = 'VVVJSCHREEDERJAUFGELEITKURSFUENFFUENFGRADNICHTSGEFUNDENYMARSCAIEREBEFOHLENESQUADRATXSTANRORTMARQUANTONJOTADREINEUNNEUNFUENFXSSSOOOVIERYSEEDREMYEINSNULYYEINSNULBEDECKTYZWOACHTMBSTEIGTYNBBELSICHTEINSSMT';
var ciphertext   = 'TMKFNWZXFFIIYXUTIHWMDHXIFZEQVKDVMQSWBQNDYOZFTIWMJHXHYRPACZUGRREMVPANWXGTKTHNRLVHKZPGMNMVSECVCKHOINPLHHPVPXKMBHOKCCPDPEVXVVHOZZQBIYIEOUSEZNHJKWHYDAGTXDJDJKJPKCSDSUZTQCXJDVLPAMGQKKSHPHVKSVPCBUWZFIZPFUUP';
var stecker      = 'AT CL DH EP FG IO JN KQ MU RX';
var ringSettings = 'AANV';
var messageKey   = 'MCSF';

var etw = new enigmajs.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var rotorI  = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q', 'I');
var rotorII = new enigmajs.Rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE', 'E', 'II');
var rotorIV = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J', 'IV');
var rotorB  = new enigmajs.Rotor('LEYJVCNIXWPBQMDRTAKZGFUHOS', '', 'beta', true);

var ukwBalt = new enigmajs.Umkehrwalze('ENKQAUYWJICOPBLMDXZVFTHRGS');

var steckerbrett = new enigmajs.Steckerbrett( stecker );

var enigma = new enigmajs.Enigma([rotorB, rotorII, rotorIV, rotorI], ukwBalt, steckerbrett, etw);

test('encryption', function(t) {

  t.plan(1);

  enigma.setRingSettings( ringSettings );
  enigma.setPositions( messageKey );
  t.equal(enigma.string( plaintext ), ciphertext, 'encrypted plaintext should match ciphertext');

});

test('decryption', function(t) {

  t.plan(1);

  enigma.setRingSettings( ringSettings );
  enigma.setPositions( messageKey );
  t.equal(enigma.string( ciphertext ), plaintext, 'decrypted ciphertext should match plaintext');

});
