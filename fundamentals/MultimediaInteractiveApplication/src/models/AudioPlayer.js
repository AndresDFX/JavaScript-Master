class AudioPlayer {

    constructor(){

        this.songs = [];
        this.queue = [];
        this.player = new Audio();

        this._gui = {
            progressBar: null,
            artistName: "",
            songName: "",
            currentTime: "0:00",
            totalTime: "0:00",
            albumCover: ""
        };

        this._buttons = {
            queue: null,
            volume: null,
            back: null,
            playPause: null,
            next: null,
            add: null
        };
    }
}