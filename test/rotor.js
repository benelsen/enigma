/*
 * Rotor
 */

var test = require('tape');

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var Rotor = require('../lib/rotor');

test('Rotor()', function (t) {

  t.test(4);

  var rotor = new Rotor();

  t.ok(rotor instanceof Rotor, 'should be an instanceof Rotor');

  t.deepLooseEqual(rotor.notches, [], 'default notches');

  rotor = new Rotor(alphabet, 'A', 'Test Rotor');

  t.deepLooseEqual(rotor.notches, ['A'], 'notches set');
  t.equal(rotor.name, 'Test Rotor', 'name set');

});

test('Rotor#getPosition()', function (t) {

  t.test(2);

  var rotor = new Rotor();

  t.equal(typeof rotor.getPosition, 'function', 'should be a function');
  t.equal(rotor.getPosition(), 'A', 'return position');

});

test('Rotor#setPosition()', function (t) {

  t.test(2);

  var rotor = new Rotor();

  t.equal(typeof rotor.setPosition, 'function', 'should be a function');
  rotor.setPosition('D');
  t.equal(rotor.position, 3, 'set position');

});

test('Rotor#getRingSetting()', function (t) {

  t.test(2);

  var rotor = new Rotor();

  t.equal(typeof rotor.getRingSetting, 'function', 'should be a function');
  t.equal(rotor.getRingSetting(), 'A', 'return ring setting');

});

test('Rotor#setRingSetting()', function (t) {

  t.test(2);

  var rotor = new Rotor();

  t.equal(typeof rotor.setRingSetting, 'function', 'should be a function');
  rotor.setRingSetting('D');
  t.equal(rotor.ringsetting, 3, 'set ring setting');

});

test('Rotor#setNotches()', function (t) {

  t.test(2);

  var rotor = new Rotor();

  t.equal(typeof rotor.setNotches, 'function', 'should be a function');
  rotor.setNotches('DE');
  t.deepLooseEqual(rotor.notches, ['D', 'E'], 'notches set');

});

test('Rotor#inNotch()', function (t) {

  t.test(3);

  var rotor = new Rotor();

  t.equal(typeof rotor.inNotch, 'function', 'should be a function');
  rotor.setNotches('D');
  rotor.setPosition('D');
  t.ok(rotor.inNotch(), 'in notch');

  rotor.setPosition('C');
  t.notOk(rotor.inNotch(), 'not in notch');

});

test('Rotor#rotate()', function (t) {

  t.test(2);

  var rotor = new Rotor();

  t.equal(typeof rotor.rotate, 'function', 'should be a function');

  rotor.setPosition('A');
  rotor.rotate();
  t.equal(rotor.getPosition(), 'B', 'advance one position');

});
