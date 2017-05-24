export default class AudioData {
    constructor() {
        //Establish connection to audio source
        var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

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
    set fftSize(fftSize){this.analyser.fftSize = fftSize;}
    /**
     * get audio data
     * @type {Uint8Array}
     */
    getAudio() {
        this.bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(this.bufferLength);
        this.analyser.getByteTimeDomainData(this.dataArray);
    }
}


