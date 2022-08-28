// asi se importa por defecto
export default{
    // en este caso son funciones, tienes que escribir el nombre de la function, obj, class, var etc para usarla
    // solo se puede usar una ves
    suma,
    res,
    multi,
    div,
    resi
}
// se importan sin las llaves '{}' solo usa el nombre con que llamas a las function´s, obj´s, class´s, var´s 
import de from './app.js'
// aqui se le da el valor que queres revolver (tiene que tener el retorn si es una funcion)
// el nombre del import y la llamada a la funcion
console.log(de.multi(2,3));