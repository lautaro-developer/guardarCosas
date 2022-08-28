const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = ''; (
        for(let persona of personas){
            console.log(persona);
            texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        }
        document.getElementById('personas').innerHTML = texto;
    }
    
    function agregarPersonas(){
    	const forma = document.forms['forma'];
    	const nombre = document.forms['nombre'];
    	const apellido = document.forms['apellido'];
    	const persona = new Persona(nombre.value, apellido.value);
    	console.log(persona);
    	persona.push(persona);
    	mostrarPersonas();
}
