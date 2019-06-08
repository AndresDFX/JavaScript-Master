var misCabeceras = new Headers();
misCabeceras.append("X-RapidAPI-Host","deezerdevs-deezer.p.rapidapi.com");
misCabeceras.append("X-RapidAPI-Key","GaYYNYwa8Mmshy6Kcq6usXTbjmjPp1JEfQujsn4Jy01PI4C442");

var opciones = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

let q = "eminem";

fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${q}`,opciones)
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json);
});