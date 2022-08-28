class Persona{
    // para que el metodo static sea exclusivo de una clase se debe poner al inicio de esta
    // los estaticos se asosian con nuestra platilla por eso podemos llamarlo desde la clase
    static contadorObjPersona = '0'; //atributo de nuestra clase, se tiene que acceder desde la clase Persona.contadorObjPersona

    // los atributos no-estaticos se llaman al crear una obj
    // email = 'defoult mail' //atributo de nuestro obj
    constructor(nombre, apellido){//los parametros son atributos no-estaticos
        this._nombre = nombre;
        this._apellido = apellido;
        // incrementar valor de metodo static
        this.idPersona = ++Persona.contadorObjPersona;
    }
    static saludar (){
        console.log('Hola desde el metodo static')
    }
    nombreCompleto(){
        return   'idPersona: ' + this.idPersona + ', nombre: ' +this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
}

class Documento extends Persona{
    constructor(nombre, apellido, dni){
        super(nombre, apellido)
        this._dni = dni;
    }

    nombreCompleto(){
        return super.nombreCompleto()+', '+ 'DNI: ' +this._dni
    }

}

const persona1 = new Persona('Ruben', 'Diaz')
console.log(persona1.toString())

const persona2 = new Documento ('Ruben', 'Diaz', 22551100)
console.log(persona2.nombreCompleto())

const persona3 = new Persona('Ruben', 'Diaz')
console.log(persona3.nombreCompleto())

const persona4 = new Documento ('Ruben', 'Diaz', 22551100)
console.log(persona4.nombreCompleto())

/* // persona1.saludar()no es posible 1lamar un método static desde un objeto
// las clases hijas heredan los atriburos static/estaticos

Persona.saludar() // pero si desde la clase misma
Documento.saludar() // se puede llamar desde la clase hija

// cada ves que se llame a la clase Persona se incrementa en 1
console.log(Persona.contadorObjPersona)
console.log(Documento.contadorObjPersona)

// se es posible acceder desde la clase persona
console.log(Persona.email)

// pero desde los obj si se puede, y tambien se heredan
console.log(persona1.email)
console.log(persona2.email)
*/