var chai = require('chai');

var RFFT = require('../src/rfft');
var A2_1024 = require('./audioBuffer.js');


describe('corbanbrook-fft', function() {

    it('should successfully transform and invert real valued input buffer', function() {
        var size = A2_1024.length;
        var fftr = new RFFT(size);
        var transform = fftr.forward(A2_1024);
        var transScaled = fftr.scaleTrans(transform);
        var a2_again = fftr.inverse(transScaled);

        for(var i = 0; i < size; i++) {
            chai.expect(A2_1024[i]).to.be.closeTo(a2_again[i], 0.0000005);
        }
    });
});