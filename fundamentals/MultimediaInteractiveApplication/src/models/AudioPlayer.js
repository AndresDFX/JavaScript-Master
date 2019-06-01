class AudioPlayer {

    constructor(params){

        //this.songs = [];
        this.queue = [];
        this.player = new Audio();
        let src = "songs/1.mp3";
        if(typeof src != "object"){
            this.player.src = src;
        }

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
        }

        if(params.hasOwnProperty("buttons")){
            var {queue,volume,back,playPause,next,add} = params.buttons;
            this.initButtons(queue,volume,back,playPause,next,add);
        }
    }

    initButtons(...params){
        this.buttons = {
            queue: params[0] || null,
            volume: params[1] || null,
            back: params[2] || null,
            playPause: params[3] || null,
            next: params[4] || null,
            add: params[5] || null
        };
    }

    addClickEvent(element, callback){
        if(element instanceof HTMLElement){
            element.onclick = callback;
        }
    }

    toggleIcon(el,aClass,bClass){
        let i = el.querySelector("i");
        if(i.classList.contains(aClass)){
            var [a,b] = [aClass,bClass];
        }else{
            var [b,a] = [aClass,bClass];
        }
        i.classList.remove(a);
        i.classList.add(b);
    }

    set buttons (btns){
        let actions = {
            playPause: ()=>{
                if(this.player.paused){
                    this.player.play();
                }else{
                    this.player.pause();
                }
                this.toggleIcon(this.buttons.playPause,"fa-play","fa-pause");
            },
            queue: ()=>false,
            volume: ()=>{
                this.player.volume = (this.player.volume != 0) ? 0 : 1
            },
            back: ()=>false,
            next: ()=>false,
            add: ()=>false,

        }
       const keys = Object.keys(btns);

       for (let i = 0; i < keys.length; i++) {
           const key = keys[i];
           if(btns[key] != null){
            this._buttons[key] = btns[key];
            this.addClickEvent(this._buttons[key],actions[key])
        }
       }
    }

    get buttons() {
        return this._buttons;
    }
}