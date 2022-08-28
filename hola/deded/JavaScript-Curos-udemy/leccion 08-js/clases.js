// una clase es una platilla para ser utilizada con un obj

class Persona{
    // se para parametros
    constructor(nombre, apellido){
        // lo que esta a la izquierda son los parametros que llamamos
        this._nombre = nombre; // si se trabaja con get y set es recomendable que se usa un barra abajo al inicion del this.
        this._apellido = apellido;
        /*this.nombreCompleto = function(){
            return this.nombre + ' ' + this.apellido
        }*/
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
}

// crear un nuevo obj de tipo persona
const persona1 = new Persona('Ruben', 'Diaz')
persona1.nombre = 'Facu' // se cambia el valor con el metodo set
console.log(persona1.nombre) // se llama el metodo get
console.log(persona1)

let = nombre = 'Lauty', apellido = 'Alonso' // se puede utilizar variables con valor para pasar como valor a los argumentos
// poner valores desde una variable
const persona2 = new Persona(nombre, apellido)
console.log(persona2)