
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

describe('Four rotor Enigma test #2', function() {

  describe('encryption', function() {

    it('encrypted plaintext should match ciphertext', function() {
      enigma.setRingSettings( ringSettings );
      enigma.setPositions( messageKey );
      enigma.string( plaintext ).should.equal( ciphertext );
    });

  });

  describe('decryption', function() {

    it('decrypted ciphertext should match plaintext', function() {
      enigma.setRingSettings( ringSettings );
      enigma.setPositions( messageKey );
      enigma.string( ciphertext ).should.equal( plaintext );
    });

  });

});
