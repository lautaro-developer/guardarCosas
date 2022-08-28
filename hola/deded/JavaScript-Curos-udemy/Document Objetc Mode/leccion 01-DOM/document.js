/*// escribir desde el JS
document.write('Hola')

// hay que tener quidado, ya que esto sobrescreibe los valores dados en el documento HTML
function mostrarValor(){
    document.write('Maestro')
}*/

function mostrarValor(){
    let form = document.forms['form']
    let texto = '';
    let nombre = form['nombre']
    let apellido = form['apellido']
     
    texto += 'Nombre: ' + nombre.value + '<br/>' + 'Apellido: ' + apellido.value; // texto = texto + nombre.value

   
   // >imprimir >
   document.write(texto) //imprimir en un div
   console.log(texto) //opcion para imprimir los valores
 }

 