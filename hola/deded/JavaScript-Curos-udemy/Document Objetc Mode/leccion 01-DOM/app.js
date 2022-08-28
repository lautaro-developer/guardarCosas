/* llamar un id por medio de document
// con innerHTML se accede al texto del id
let titulo = document.getElementById('titulo');
console.log(`Valor del titulo: ${titulo.innerHTML}`);
titulo.innerHTML = 'New title'

console.log(`Valor del enlace org: ${document.getElementById('enlace').innerHTML}` )
enlace.innerHTML = 'Hola'

// inner/interno
let parrafo = document.getElementById('parrafo');
console.log(`Valor del parrafo > ${parrafo.innerHTML}`);//se necesita tener el innerHTML dentro del console.log para que pueda ser cambiado

// canbiar valor con innerHTML (esto se muestra en la web)
// no se modifica el valor original
parrafo.innerHTM L = 'Nuevo valor del parrafo: ';*/

// llmar elementos pr tag/etiquta
let parrafos = document.getElementsByTagName("p");

// llamar elementos por clases/class
// let elementos = document.getElementsByClassName("p.azul");

// llama a los etiqueta que tienen la clase de azul
let elementos = document.querySelectorAll("h1.azul");
// console.log(`N° de parrfos: ${elementos.length}`)

// usar un ciclo for con document
// se puede usar sin tener los id's
for (let i = 0; i < elementos.length; i++) {
  // se añades las veses que se imprimen en la i
  console.log(`No° elementos: ${elementos.length}`)
  console.log(`indice: ${i} - ${elementos[i].innerHTML}`);
  // despues se llama a la variable con document, se usa array con indice y innerHTML
}

for(let parrafos1 of parrafos){
    console.log(`parrafos > ${parrafos1.innerHTML}`)
}