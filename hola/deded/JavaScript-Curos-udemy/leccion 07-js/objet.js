// los objectos pueden almacenar diferentes elementos/propiedades

const persona = {
	nombre: 'ruben',
	apellido: 'Zuares',
	mail: 'RZ@gmail.com',
	tel: 155454600,
	// agregar metodo
	nombreCompleto: function(){
		// se llama a las variables con el operador this.
		return this.nombre + ' ' + this.apellido
	}
}

// acceder a loe elementos de manera individual
console.log(persona.nombreCompleto())
console.log('nombre:' ,persona.nombre)

// acceder por medio de un Array
console.log(persona['nombre'])


// otra forma de crear objectos
let persona2 = new Object();

// poner los elementos
persona2.nombre = 'Jorge'

console.log(persona2.nombre)

// recorrer elementos con ciclo for in
for(nombrePropiedad in persona){
	// acceder al nombre de las propiedades
	console.log(nombrePropiedad);
	// acceder a los valores de la propiedad
	console.log(persona[nombrePropiedad]);
	
}