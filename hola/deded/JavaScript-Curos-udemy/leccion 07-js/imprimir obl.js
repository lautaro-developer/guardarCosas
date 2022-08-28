const persona = {
    nombre: 'Ruben',
    apellido: 'Diaz'
}

// distintas formas de imprimir un obj

// concatenar los valores de cada elemento
console.log(persona.nombre, persona.apellido)

// imprimir en ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

// imprimir por Arrat
const nombreArray = Object(persona)
console.log(nombreArray)

// imprimit por una varible (esto transforma el resultado a un string)
const nombreString = JSON.stringify(persona)
console.log(nombreString)