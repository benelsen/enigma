
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Steckerbrett = require('../lib/steckerbrett');

describe('Steckerbrett', function() {

  describe('#setPlugs()', function () {

    it('should be a function', function() {
      var plugboard = new Steckerbrett();
      plugboard.setPlugs.should.be.a('function');
    });

  });

});
