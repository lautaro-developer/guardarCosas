// funcion normal

function miVariable(){
    console.log('> Saludos desde la funcion normal')
}
miVariable()

// syntaxsis de la funcion flecha.Esta funcion como se da el valor a la variable no aplica el hossting
let miFuncionFlecha = () => {
    console.log('> Saludos desde la funcion flecha')
}
miFuncionFlecha()

// funcion de una linea (solo se usa si solo se tiene una linea de codigo)
const funcionEnUnaSolaLinea = () => console.log('> funcion de una linea')
funcionEnUnaSolaLinea()

// return desde funcion flecha
const funcionConReturn = () => {
    return '> retornar una funcion flacha'
}
console.log(funcionConReturn())

// retorn en usa sola linea (no se usa retorn)
const funcionConReturnSimpli = () => '> retornar una funcion flacha simple'
console.log(funcionConReturnSimpli())

// funcion flecha con Objetos
const funcionObj = () => ({
    nombre: 'Ruben',
    apellido: 'Diaz'
})
console.log(funcionObj())

// parametros en la funcion
// variable nombre de la funcion = parametro => cuerpo de la funcion 
const funcionConParametros = nombre => console.log(nombre)
funcionConParametros('> funcion flecha con parametros, Lau')



/*
miVariable()
miFuncionFlecha()
funcionEnUnaSolaLinea()
console.log(funcionConReturn())
console.log(funcionConReturnSimpli())
*/