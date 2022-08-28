class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: \n nombre: ${this._nombre}, sueldo: $${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento = departamento;
    }
    
    // se aplica la sobre escritura
    obtenerDetalles(){
        return `Gerente: \n ${super.obtenerDetalles()}, depto: ${this._departamento}`
    }
}

// el consepto de polimorfismo quiere decir que dependiendo de los objetos que creamos se los puede llamar con una linea de codigo
function imprimir(tipo){
    console.log('Funcion: ' ,tipo.obtenerDetalles())
}



const empleado1 = new Empleado('Ruben', 250)
console.log (empleado1.obtenerDetalles());


const gerente1 = new Gerente('Ruben', 250, 'web dev')
console.log(gerente1.obtenerDetalles())

// aqui se llama la funcion para que se imprima los valores de los objetos
imprimir(empleado1)
imprimir(gerente1)