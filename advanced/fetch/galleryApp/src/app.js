let images = [
    `http://127.0.0.1:8887/assets/imgs/i1.jpg`,
    `http://127.0.0.1:8887/assets/imgs/i2.jpg`,
    `http://127.0.0.1:8887/assets/imgs/i3.jpg`,
    `http://127.0.0.1:8887/assets/imgs/i4.jpg`,
    `http://127.0.0.1:8887/assets/imgs/i5.jpg`
];

const app = document.querySelector("#app");
const columns = 4;

for (let i = 0; i < columns; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < images.length; j++) {

        let pic = document.createElement("div");
        pic.classList.add("pic");

        let img = document.createElement("img");
        img.src = "./assets/imgs/placeholder.png";
        img.classList.add("placeholder");

        pic.appendChild(img);
        column.appendChild(pic);
    }

    app.appendChild(column);
}

let imgs = document.querySelectorAll(".pic img");
//console.log(imgs);

for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    img.onload = function(){
        //console.log(this, ` said: RAWWWR!`);
        let n = Math.floor(Math.random() * images.length);

        var misCabeceras = new Headers();
        var opciones = { method: 'GET',
           headers: misCabeceras,
           mode: 'cors',
           cache: 'default' };

        fetch(images[n],opciones)
        .then((response)=>{
            return response.blob();
        })
        .then((img)=>{
            console.log(this);
            if(this.classList.contains("placeholder")){
                this.classList.remove("placeholder");
            }
            this.src = URL.createObjectURL(img);
            this.onload = null;
        })
    };
    
}

