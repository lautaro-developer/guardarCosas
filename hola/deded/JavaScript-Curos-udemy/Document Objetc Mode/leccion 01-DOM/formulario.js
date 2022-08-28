 function mostrarValor(){
     let form = document.forms['form']
     let texto = '';
    // acceder a los elementos del formulario de forma individual
     let nombre = form['nombre']
     let apellido = form['apellido']
      
     texto += 'Nombre: ' + nombre.value + '<br/>' + 'Apellido: ' + apellido.value; // texto = texto + nombre.value

    //    ciclo for>
    //  for(elemento of form){
    //      texto += elemento.value + '<br/>';
    // }
    
    // >imprimir >
    document.getElementById('valor').innerHTML = texto //imprimir en un div
    console.log(texto) //opcion para imprimir los valores

    // uso de setTimeout>
    // setTimeout(() => console.log('Inicio'), 3000)
    // setTimeout(() =>  document.getElementById('valor').innerHTML =  texto, 4000)
  }