console.log("Antes del request");
var req = new XMLHttpRequest();
req.open('GET', 'http://127.0.0.1:8887/datasets/westeros.json', false);

let status = document.querySelector("#XMLHTTPRequest .status");
status.innerHTML = "Solicitando";

req.send(null);

if (req.status == 200) {
  status.innerHTML = "XMLHTTPRequest Cargado";
  console.log(JSON.parse(req.responseText));
}
console.log("Después of request");


console.log("Starting request");
let fstatus = document.querySelector("#fetch .status");
fstatus.innerHTML = "Cargando";

fetch(`http://127.0.0.1:8887/datasets/westeros.json`,{})
.then(function(response) {
  return response.json(); 
  /*
    return promise = new Promise( (resolve, reject) => {
      if(JSON.parse(response))
        resolve(JSON.parse(response))
      else
        reject("No es un JSON")
    } );
  */
})
.then(function(json) {
  console.log(json);
});
console.log("End of request");
