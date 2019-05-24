let r = [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    console.log(valorAnterior);
    console.log(valorActual);
    console.log(indice);
    console.log(vector);
    return valorAnterior + valorActual;
});

console.log(r);
//Output: 10