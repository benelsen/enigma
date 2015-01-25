/*
 * Steckerbrett
 */

var test = require('tape');

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var Walze = require('../lib/walze');

test('Walze', function(t) {

  t.plan(5);

  var walze = new Walze();
  t.ok(walze instanceof Walze, 'should be an instanceof Walze');

  t.equal(walze.name, '', 'default name');
  t.deepLooseEqual(walze.wiring, alphabet.split(''), 'default wiring');

  var testWiring = 'BCDEFGHIJKLMNOPQRSTUVWXYZA';
  walze = new Walze(testWiring, 'Test Walze');

  t.equal(walze.name, 'Test Walze', 'name set');
  t.deepLooseEqual(walze.wiring, testWiring.split(''), 'wiring set');

});


test('Walze#alphabet', function(t) {

  t.plan(2);

  var walze = new Walze();
  t.ok(walze.alphabet, 'should exist');
  t.deepLooseEqual(walze.alphabet, alphabet.split(''), 'should match');

});


test('Walze#setName()', function(t) {

  t.plan(3);

  var walze = new Walze();
  t.equal(typeof walze.setName, 'function', 'should be a function');

  walze.setName();
  t.equal(walze.name, '', 'should set empty string if no argument is passed');

  var testName = shuffle( alphabet.split('') ).join('');
  walze.setName(testName);
  t.equal(walze.name, testName, 'should set name to passed sting');

});


test('Walze#setWiring()', function(t) {

  t.plan(4);

  var walze = new Walze();
  t.equal(typeof walze.setWiring, 'function', 'should be a function');

  t.deepLooseEqual(walze.wiring, alphabet.split(''), 'should set alphabet when passing no arguments');

  var testSequence = shuffle( alphabet.split('') );
  walze.setWiring(testSequence);
  t.deepLooseEqual(walze.wiring, testSequence, 'should set to passed array of strings/chars');

  walze.setWiring(testSequence.join(''));
  t.deepLooseEqual(walze.wiring, testSequence, 'should set to passed string');

});


test('Walze#signal()', function(t) {

  t.plan(6);

  var walze = new Walze();
  t.equal(typeof walze.signal, 'function', 'should be a function');

  t.equal(walze.signal('G'), 'G', 'should return the same character with default setting');

  walze = new Walze('ZABCDEFGHIJKLMNOPQRSTUVWXY');
  t.equal(walze.signal('A'), 'Z', 'should return the previous character with 1 right shifted alphabet');
  t.equal(walze.signal('Z'), 'Y', 'should return the previous character with 1 right shifted alphabet');

  t.equal(walze.signal('Z', true), 'A', 'should return the next character with 1 right shifted alphabet in reverse mode');
  t.equal(walze.signal('Y', true), 'Z', 'should return the next character with 1 right shifted alphabet in reverse mode');

});


function shuffle(array) {
  var tmp, current, top = array.length;

  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }

  return array;
}
