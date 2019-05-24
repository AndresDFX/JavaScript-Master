var heart = document.querySelector(".heart");
var shuffle = document.querySelector(".shuffle");
var player = document.querySelector("#player");
var info = document.querySelector(".info");
var pause = document.querySelector(".pause");
var play = document.querySelector(".play");
var option = document.querySelector(".option");
var playlist = document.querySelector("#playlist");

option.onclick = function(){
  playlist.style.marginLeft = (playlist.style.marginLeft == "" || playlist.style.marginLeft == "-300px") ? "0px" : "-300px";
};

heart.onclick = function () {
  this.classList.toggle('clicked');
};

shuffle.onclick = function () {
  this.classList.toggle('clicked');
};

let audio = new Audio("./assets/songs/virtualscape.mp3");
audio.ontimeupdate = () => { this.updateData() };

function updateData(){
  let p = (audio.currentTime / audio.duration) * 100;
  let bar = document.querySelector(".fill");
  bar.style.width = `${p}%`
}

pause.style.display = "none"; //hide pause button until clicked

//play button
play.onclick = function () {
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
};

//pause button
pause.onclick = function () {
  audio.pause();
  play.style.display = "block";
  pause.style.display = "none";
};
