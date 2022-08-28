import fe, { primerNombre } from './app2.js';
import {
    cadena,
    // exportacion para cambiar el nombre de la variable 
    // nombreOriginal 'as' nombreNuevo
    primerNombre as apellido,
    a,
    b,
    obj
} from './app2.js';
console.log('asasassa')
console.log('holllllll')
console.log('Exportar normal:' ,cadena);
console.log('Exportacion default')
console.log(fe.suma(2,3));
console.log(fe.multi(2,3));
console.log('-----------------------')
console.log('Exportar una clase:' ,obj.b(2))
console.log(apellido);
console.log('Exportar variable en una linea:' ,a+b)

// console.log(suma(2,3));
// console.log(div(2,3));
// console.log(res(2,3));
// console.log(resi(2,3));
// console.log(multi(2,3));