const personas = [
  // se hace una variable para crear un nuevo tipo de objeto y se le da sus valores
  //   new Persona("Lauty", "Alonso", 1100223),
  //   new Persona("Facu", "Egardo", 5500011),
];

// se llama al elemento onload del body
document.getElementById("mostrarPersonas").onload = mostrarPersonas;
function mostrarPersonas() {
  let texto = ""; // se crea un string vacio
  for (let persona of personas) {
    // se hace un ciclo for y se llama la constante con los tipos persona
    // se usa la variable vacia para hacer una lista con los tipos que el usuario va a ingresar
    texto += `<li> ${persona.nombre} ${persona.apellido}, dni: ${persona.dni}</li>`;
  }
  // se llama a un div con id se hacede al contenido y se cambia el valor por la variable texto
  document.getElementById("personas").innerHTML = texto;
}

// se llama al boton que se usa para que el user ingrese los datos
document.getElementById("mostrarPersona").onclick = mostrarPersona;
function mostrarPersona() {
  // se llama al formulario
  const forma = document.forms["form"];
  // se accede a los id de cada un con array
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  const dni = forma["dni"];
  // -------------------- //

  // se crea un if que evalua que alla cadena vacia
  if (nombre.value != "" && apellido.value != "" && dni.value != "") {
    // se accede a los valores de la class Persona
    const persona = new Persona(nombre.value, apellido.value, dni.value);
    console.log(persona);
    // se agrega un valor a la constante persona
    personas.push(persona);
    // se llama a la funcion con onload
    mostrarPersonas();
    document.getElementById("resibido").innerHTML = "valor agregado con exito";
  } else {
    document.getElementById("resibido").innerHTML = "valor incorrecto";
  }
}
