class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apelido = apellido;
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apelido;
    }
    set apellido(apellido){
        this._apelido = apellido;
    }
    // crear un funcion en una clase
    nombreCompleto(){
        return this._nombre + ' ' + this._apelido;
    }
    // sobrescribir el metodo de la clase padre (Objet)
    toString(){ //Sobreescribiendo el metodo de la clase Padre (Object)
        //Se aplica poliformismo (riultiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hi
           return this.nombreCompleto();
    }
}

// se hereda la clase persona usando extends
class Documento extends Persona{
    constructor(nombre, apellido, dni, nacionalidad){//se tienen que pasar los parametros de la clase padre
        super(nombre, apellido)
        this._dni = dni;
        this._nacionalidad = nacionalidad;
    }

    // get y set del dni
    get dni(){
        return this._dni
    }
    set dni(dni){
        this._dni = dni
    }

    // get y set de la nacionalidad
    get nacionalidad(){
        return this._nacionalidad
    }
    set nacionalidad(nacionalidad){
        this._nacionalidad = nacionalidad;
    }
    // sobre-escritura: es editar un metodo/funcion
    // para que funcione tiene que ser igual a la funcion de la clase padre, 
    // mismo nombre y mismos parametros
    nombreCompleto(){
        return 'Nombre y apellido: '+ this._nombre +' '+ this._apelido +', '+ 'DNI: ' +this._dni + ' ' + ' Pais: ' + this._nacionalidad;
    }
    // esto es perder tiempo asi que se usa la propiedad super para llamar a la funcion
    nombreCompleto(){// se utiliza     super.'nombre de la funsion'(
        return 'Nombre y apellido: '+  super.nombreCompleto()+', '+ 'DNI: ' +this._dni + ' ' + ' Pais: ' + this._nacionalidad;
    }
}

// se manda a dar los valores
const dato = new Documento('Ruben', 'Diaz', 220099, 'Arg')
console.log(dato)
const dato1 = new Persona('Lautaro', 'Alonso')
console.log(dato1.toString())

// se tiene que usar el nombre de la variable que creamos el obj tipo Documento
console.log(dato.toString())
