const persona1 = {
    nombre: 'Lautaro',
    apellido: 'Diaz',
    // usar parametros
    nombreCompleto: function(residencia, dni){
        return residencia + ' ' + this.nombre + ' ' + this.apellido + ', ' + dni
    }
}

const persona2 = {
    nombre: 'Lautaro',
    apellido: 'Diaz'
}

// se manda a imprimir la funcion del obj con los datas de la const persona2
// dentro de la llamada a la variable damos los valores de los parametros
console.log(persona1.nombreCompleto.call(persona2, 'Arg', 9554501));

// aqui da los datos de los parametros como undefined
// hay que pasar los valores
console.log(persona1.nombreCompleto('Cordoba', 1100044))

// pasar parametros por medio de un Array
const arreglo = ['BS_AS', 220011];
console.log(persona1.nombreCompleto.apply(persona2, arreglo ));