
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Rotor = require('../lib/rotor');

describe('Rotor', function() {

  describe('#setNotches()', function () {

    it('should be a function', function() {
      var rotor = new Rotor();
      rotor.setNotches.should.be.a.Function;
    });

  });

  describe('#inNotch()', function () {

    it('should be a function', function() {
      var rotor = new Rotor();
      rotor.inNotch.should.be.a.Function;
    });

  });

  describe('#rotate()', function () {

    it('should be a function', function() {
      var rotor = new Rotor();
      rotor.rotate.should.be.a.Function;
    });

  });

});
