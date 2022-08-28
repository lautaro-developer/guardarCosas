// el modo extricto se usa para que de error a una variable que no a sido definida

'use strict'

let x=10
console.log(x)

miFuncion()

function miFuncion(){
    // se puede usar dentro de la funcion y solo afectara a esta
    'use strict'
    let y=10
    console.log(y)
}