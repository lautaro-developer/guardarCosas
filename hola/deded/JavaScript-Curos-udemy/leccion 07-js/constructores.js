// es comun que el nombre de una funcion contructora comienze com mayus
// el constructor es un tipo funcion
function Persona(nombre, apellido, mail){
    // lo que esta a la izquierda manda a llamar a los parametros
    this.nombre = nombre
    this.apellido = apellido
    this.mail = mail
    // agregar una funcion a un contructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    }
}

// agregar un elemento a todos los objetos
Persona.prototype.tel = 155454600

// en los obj no se puede reutilizar pero con los constructores si
const padre = new Persona('Ruben', 'Diaz', 'Rd@gmail.com');
console.log(padre.nombreCompleto())

const madre = new Persona('Facu', 'Diaz', 'Fd@gmail.com');
console.log(madre.tel)

// las modificasiones solo afectan a las variables/cosntantes selecsionadas
padre.nombre = 'Lautaro'
console.log(padre)

// no se modifica en las otras variables
console.log(madre)
