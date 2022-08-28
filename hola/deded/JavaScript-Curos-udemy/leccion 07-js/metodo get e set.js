const persona = {
	nombre: 'ruben',
	apellido: 'Zuares',
	mail: 'RZ@gmail.com',
	tel: 155454600,
    idioma: 'es_arg',
    // el metodo 'get' se utiliza para dar a entender que es una funcion
	get nombreCompleto(){
		return this.nombre + ', ' + this.apellido
	},
    documentos: function(){
        return this.mail + ', ' + this.tel
    },
    // cambiar idioma con una funcion
    get lang(){
        return this.idioma.toUpperCase();
    },
    // modificar valor con set
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    }
}

// forma con get
console.log(persona.nombreCompleto)

// forma clasica
console.log(persona.documentos())

// se tiene que imprimir el nombre de la funcion
console.log(persona.lang)

// cambiar valor con set
persona.lang = 'en-uk'
console.log(persona.lang)
console.log(persona.idioma)