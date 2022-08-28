// lo recomendables es asignar obj a const

// se crea un objet 
const persona = {
	nombre: 'ruben',
	apellido: 'Diaz'
}

// se llama usando el 'p1' 
function cambiarObj(p1){
	// despues se llama lo que queremos cambiar
	p1.nombre = 'jorge';
	p1.apellido = 'lucas'
}

// paso por referencia
cambiarObj( persona );
console.log(persona)