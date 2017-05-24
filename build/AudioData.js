"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioData = function () {
    function AudioData() {
        _classCallCheck(this, AudioData);

        //Establish connection to audio source
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        this.analyser = audioCtx.createAnalyser();
        this.source = audioCtx.createMediaStreamSource(stream);

        this.source.connect(analyser);
        this.analyser.connect(distortion);

        this.analyser.fftSize = 2048;
    }
    /**
     * set fft size
     * @param fftSize {int}
     */


    _createClass(AudioData, [{
        key: "getAudio",

        /**
         * get audio data
         * @type {Uint8Array}
         */
        value: function getAudio() {
            this.bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(this.bufferLength);
            this.analyser.getByteTimeDomainData(this.dataArray);
        }
    }, {
        key: "fftSize",
        set: function set(fftSize) {
            this.analyser.fftSize = fftSize;
        }
    }]);

    return AudioData;
}();

exports.default = AudioData;