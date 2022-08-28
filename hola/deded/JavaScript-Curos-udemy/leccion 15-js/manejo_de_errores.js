'use strict'

// el bloque try se usa para que cuando alla un erroe en el codigo no acabe de manera instatania
try{
    let x = 19 //se ejecuta el bloque finally
    // miFuncion()
    // la funcion throw se usa para arojar un nuevo error
    throw 'funcion no esta definida'
}
// la funcion catch se complementa
// se pasa como parametro el nombre y se imprime
catch(error){
    console.log(error)
}
// el bloque finally es para que si hay un error el codigo se siga ejecutando
finally{ //este bloauq es opcional
    console.log('Fin de la revicion de errores')


console.log('Fin')}
