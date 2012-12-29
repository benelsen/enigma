var assert = require('assert');

var enigmajs = require('..');

// Message taken from http://www.bytereef.org/m4-project-second-break.html
var ciphertext   = 'TMKFNWZXFFIIYXUTIHWMDHXIFZEQVKDVMQSWBQNDYOZFTIWMJHXHYRPACZUGRREMVPANWXGTKTHNRLVHKZPGMNMVSECVCKHOINPLHHPVPXKMBHOKCCPDPEVXVVHOZZQBIYIEOUSEZNHJKWHYDAGTXDJDJKJPKCSDSUZTQCXJDVLPAMGQKKSHPHVKSVPCBUWZFIZPFUUP';
var plaintext    = 'VVVJSCHREEDERJAUFGELEITKURSFUENFFUENFGRADNICHTSGEFUNDENYMARSCAIEREBEFOHLENESQUADRATXSTANRORTMARQUANTONJOTADREINEUNNEUNFUENFXSSSOOOVIERYSEEDREMYEINSNULYYEINSNULBEDECKTYZWOACHTMBSTEIGTYNBBELSICHTEINSSMT';
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
enigma.setRingSettings( ringSettings );
enigma.setPositions( messageKey );

var decrypted = enigma.string(ciphertext);

describe('Four rotor Enigma decryption test #2', function(){
  it('decrypted should be an exact match of plaintext', function() {
    assert.equal( decrypted, plaintext );
  });
});
