class Persona{
    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = Persona.contadorPersona++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // get persona
    get idPersona(){
        return this._idPersona;
    }

    // set y get del nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    // set y get del apellido
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    // set y get de la edad
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad
    }
    datosCompletosPersona(){
        return 'Id de la persona: ' + this.idPersona + ', ' +'Nombre y apellido: ' + this._nombre + ' ' + this._apellido + ', edad: ' + this._edad
    }
    toString(){
        return this.datosCompletosPersona();
    }

}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = Empleado.contadorEmpleados++;
        this._sueldo = sueldo
    }
    get idEmpleado(){
        return this._idEmpleado
    }

    // get y set del sueldo
    get sueldo(){
        return this._sueldo
    }
    set sueldo(sueldo){
        this._sueldo = sueldo
    }
    datosCompletosEmpleado(){
        return 'Sueldo: ' + this.sueldo + ', id del empleados: ' + this.idEmpleado;
    }
    toString(){
        return super.toString() + ', ' + this.datosCompletosEmpleado();
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = Cliente.contadorCliente++;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente
    }
    
    get fechaRegistro(){
        return this._fechaRegistro
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }
    datosCompletosCliente(){
        return ', Fecha de registro: ' + this._fechaRegistro + ', id del cliente: ' + this.idCliente
    }
    toString(){
        return super.toString() + ' ' + this.datosCompletosCliente();
    }
}

const persona1 = new Persona('Ruben', 'Diaz', 18)
console.log(persona1.toString())

const persona2 = new Persona('Karina', 'Diaz', 38)
console.log(persona2.toString())

const empleado1 = new Empleado(prompt('nombre') , prompt('Apellido'), prompt('edad') , prompt('Sueldo'))
console.log(window.alert(empleado1.toString()))

const empleado2 = new Empleado('Lautaro', 'Alonso', 18, '25k')
console.log(empleado2.toString())

const cliente1 = new Cliente('Genardo', 'Alonso', 30, '09/05/2017') //se puede usar new Date() para poner un registro de la hora actual
console.log(cliente1.toString())

const cliente2 = new Cliente('Gaita', 'Alonso', 40, '09/05/2017')
console.log(cliente2.toString())