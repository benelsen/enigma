/*
 * Steckerbrett
 */

var test = require('tape');

var Steckerbrett = require('../lib/steckerbrett');

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var stecker = 'AB CD EF';

test('Steckerbrett', function (t) {

  t.plan(3);

  var plugboard = new Steckerbrett();
  t.ok(plugboard instanceof Steckerbrett, 'should be an instanceof Steckerbrett');

  t.deepLooseEqual(plugboard.wiring, alphabet, 'default wiring');

  plugboard = new Steckerbrett(stecker);
  t.deepLooseEqual(plugboard.wiring, 'BADCFEGHIJKLMNOPQRSTUVWXYZ'.split(''), 'wiring set');

});

test('Steckerbrett#setPlugs()', function (t) {

  t.plan(2);

  var plugboard = new Steckerbrett();
  t.equal(typeof plugboard.setPlugs, 'function', 'should be a function');

  plugboard.setPlugs(stecker);
  t.deepLooseEqual(plugboard.wiring, 'BADCFEGHIJKLMNOPQRSTUVWXYZ'.split(''), 'wiring set');

});
