// tipos de datos en js 

// datos str/string/cadena
let cadena = 'cadena';
console.log(cadena)

// cambio de valor 
cadena = 10;

// dato int/numer0

let numero = 10;
console.log(numero)

// dato object/objeto
let Object = {
    nombre: 'ruben',
    apellido: 'diaz',
    numero: 155454600
}

console.log(Object)

// saber el tipo de dato con typeof (esto se hace cuandos se imprime)

numero = 10;
cadena = 'cadena'

console.log(typeof numero)
console.log(typeof cadena)

let obj = {
    gun:  ''
}

console.log(typeof obj)

// tipo boolean 
// dato true/verdadero y false/falso
let bandera = true
console.log(typeof bandera)
console.log(bandera)


// tipo function/funciones
function def(){}
console.log(def)

// tipo symbol
let simbolo = Symbol('miSimbolo')
console.log(simbolo)

// tipo class/clase. es una function

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)
console.log(Persona)

// tipo undefine (esto susede porque declaro una variable pero no tiene valor)
let x;
console.log(x)

// null (quiere decir que no le damos un valor todavia)
let sinValor = null;
console.log(sinValor)
console.log(typeof sinValor)