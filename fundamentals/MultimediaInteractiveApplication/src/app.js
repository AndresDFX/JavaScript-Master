let ap = null;

function start(){
    ap = new AudioPlayer({
        gui:{
            totalTime: {value: "0:00", DOMElement: document.querySelector(".totalTime")},
            currentTime: {value: "0:00", DOMElement: document.querySelector(".currentTime")},
        },
        buttons:{
            playPause: document.querySelector(".play"),
            volume: document.querySelector(".volume")
        }
    });
}