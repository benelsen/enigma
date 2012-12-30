
var enigmajs = require('..');

// Message taken from http://www.bytereef.org/m4-project-first-break.html
var plaintext    = 'VONVONJLOOKSJHFFTTTEINSEINSDREIZWOYYQNNSNEUNINHALTXXBEIANGRIFFUNTERWASSERGEDRUECKTYWABOSXLETZTERGEGNERSTANDNULACHTDREINULUHRMARQUANTONJOTANEUNACHTSEYHSDREIYZWOZWONULGRADYACHTSMYSTOSSENACHXEKNSVIERMBFAELLTYNNNNNNOOOVIERYSICHTEINSNULL';
var ciphertext   = 'NCZWVUSXPNYMINHZXMQXSFWXWLKJAHSHNMCOCCAKUQPMKCSMHKSEINJUSBLKIOSXCKUBHMLLXCSJUSRRDVKOHULXWCCBGVLIYXEOAHXRHKKFVDREWEZLXOBAFGYUJQUKGRTVUKAMEURBVEKSUHHVOYHABCJWMAKLFKLMYFVNRIZRVVRTKOFDANJMOLBGFFLEOPRGTFLVRHOWOPBEKVWMUQFMPWPARMFHAGKXIIBG';
var stecker      = 'AT BL DF GJ HM NW OP QY RZ VX';
var ringSettings = 'AAAV';
var messageKey   = 'VJNA';

var etw = new enigmajs.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

var rotorI  = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q', 'I');
var rotorII = new enigmajs.Rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE', 'E', 'II');
var rotorIV = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J', 'IV');
var rotorB  = new enigmajs.Rotor('LEYJVCNIXWPBQMDRTAKZGFUHOS', '',  'beta');

var ukwBalt = new enigmajs.Umkehrwalze('ENKQAUYWJICOPBLMDXZVFTHRGS');

var steckerbrett = new enigmajs.Steckerbrett( stecker );

var enigma = new enigmajs.Enigma([rotorB, rotorII, rotorIV, rotorI], ukwBalt, steckerbrett, etw);

describe('Four rotor Enigma test #1', function() {

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
