// programacion orienteada a OBJ

let obj = {

    // en el pensamienta de poo esto se le conose como propiedades
    nombre: 'Ruben',
    apellido: 'Diaz',
    dni: 223344,
    tel: 11223311,
    // pero en la plactica se le conose como clave: 'valor'

    hobbie: ['game', 'programmin', 'run'],
    comida: {
        pasta: 'capelitini',
        sopa: 'Nork',
    },
    nose(){
        // this hace referencia al objeto mismo
        // un ejemplo en que si imprimimos this en una function este imprimira todo el OBJ
        console.log(this.nombre = 'raul')
        console.log(`${this.nombre} ${this.apellido}`)
    }
}
console.log(`llaves: ${Object.keys(obj)}`)

// contructor
function Person(){
    this.name = 'Ruben';
    this.lastName = 'Diaz';
    this.age = '70';
    this.fun = function() {
        return `${this.name} ${this.lastName}`
    };
}

const a = new Person('raul', 'merenges', 90);
console.log(a);
a.name = 'juan';
a.lastName = 'cameron';
a.age = 20;
console.log(`Nombre completo: ${a.fun().toUpperCase()} Edad: ${a.age}`);

let cuenta = {
    numeroTarjeta: 72727272727272,
    plata: 200,
    efectivo(p){
        this.plata += p
    },
    efectivoMenos(p){
        this.plata -= p;
    },
}
// console.log(obj.nose());
// console.log('  ')

// cuenta.efectivo(20);
// cuenta.efectivo(20);
// cuenta.efectivo(20);
// console.log(cuenta.plata);

// cuenta.efectivoMenos(50);
// console.log(cuenta.plata);

// objeto pelado
const objOrigin = new Object(true, 23);
objOrigin.name = 'juan';
objOrigin.lastName = 'Dominic';
console.log(objOrigin);