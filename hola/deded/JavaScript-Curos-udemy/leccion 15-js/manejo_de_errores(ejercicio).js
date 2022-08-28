'use strict'

let resultado = 2.0;

try{
    if (isNaN(resultado)) throw 'No es un numero'
    else if (resultado === '') throw 'Es una cadena vacia'
    else if (resultado >= 0) throw 'Es un valor positovo'
    else if (resultado < 0) throw 'Es un valor negativo'
    else if (resultado === Boolean) throw 'Es un tipo boolean'
}
catch(error){
    console.log(error)
}