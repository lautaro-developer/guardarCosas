const persona = {
    nombre: 'Ruben',
    apellido: 'Diaz'
}

// agregar nuevos elementos
persona.mail = 'RubenDiaz@gmail.com'
console.log(persona)

// editar elementos 
persona.nombre = 'Lauty'
console.log(persona)

// borrar un elemento y valor
delete persona.nombre
console.log(persona)