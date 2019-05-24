var starks = ["Arya", "Bran", "Sansa"];
    
//forma tradicional
/*
var azhorAhai = starks[0];
var cuervoTresOjos = starks[1];
var esa = starks[2];
*/

//con destructuración
var [azhorAhai, cuervoTresOjos, esa] = starks;

//The old fashion
/*
function swap(a,b){
    let temp = a;
    a = b;
    b = temp;
    let retorno = [a,b];
    return retorno;
}
*/

//Full pro's fashion
function swap(a,b){
    return [a,b] = [b,a]; //sin variable temporal y con múltiple retorno.
}

[a,b] = swap(a,b); //Claramente siendo tan pros ya no haría falta la función swap.