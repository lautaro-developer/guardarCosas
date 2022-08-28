// se tiene que tener cuidado al elegir el tipo de numero, ya que se puede generar errores 
// el operador Number combierte la explecion string en numero

let edad = prompt('De su edad');

// el operador isNaN se utiliza para que si el usuario de un valor que-
// -no sea un numero aparesca un mensaje. Esto es desntro de un-
// -if y en el else va el codigo el cual preguntamos tal cosa

if(isNaN(edad)){
    console.log(window.alert('No es un numero'))
}
else{
    let votar = Number(edad) >= 18 ? 'Puede votar' : 'No puede votar'
    console.log(window.alert(votar), votar)
}