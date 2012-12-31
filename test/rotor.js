
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Rotor = require('../lib/rotor');

describe('Rotor', function() {

  describe('#setNotches()', function () {

    it('should be a function', function() {
      var rotor = new Rotor();
      rotor.setNotches.should.be.a('function');
    });

  });

  describe('#inNotch()', function () {

    it('should be a function', function() {
      var rotor = new Rotor();
      rotor.inNotch.should.be.a('function');
    });

  });

  describe('#rotate()', function () {

    it('should be a function', function() {
      var rotor = new Rotor();
      rotor.rotate.should.be.a('function');
    });

  });

});
