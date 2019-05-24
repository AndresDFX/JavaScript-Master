let guardianes = ["Peter Quill", "Gamora", "Drax el destructor", "Rocket", "Groot"];

const resultado = guardianes.filter(guardian => guardian != "Gamora");

console.log(resultado);

let avengers = ["Iron man", "Thor", "Hulk", "El Capi"];

/**
 * 
 * @param query string 
 * @param elements arreglo en donde vamos a buscar
 */
function search(query, elements) {
    //retornamos el arreglo resultante del filtro
    return elements.filter(function (el) {
        //'el' es en el caso de un arreglo ["a","b","c"] un string
        //String.indexOF => https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/indexOf
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

console.log(search("o", avengers));
 //Output: [ 'Iron man', 'Thor' ]