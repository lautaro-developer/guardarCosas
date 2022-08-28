// Eapreciones regulares

let a = 'no capo capa cape perdon no pued@ salir hoy 2331123445509';

let b = /[aeiou]/ig; // aqui se extraen las vocales
console.log(a.match(b).join());

b = /[a-d]/ig; // aqui se da un rango de letras
console.log(a.match(b).join());

b = /[0-9]/ig; // se da un rango de numeros
console.log(a.match(b));

b = /[\w]/ig;
console.log(a.match(b));

b = /c[a]p[o]/ig; //aqui busca la coincidencas que tenga entre corchete
console.log(a.match(b));

b = /[^0-9aeiuo]/ig; // con ALTGR + {} se usa el conjunto de caracteres denegador
// poner palabreas entre los corchetes y no aparecen una ves que es imprimido
console.log(a.match(b));

a = 'abc';
b = /a+/ig; // el operador + hace que encuentre la letra una o mas veces
console.log(a.match(b)); // aqui hara un array con una cadena

a = 'aabc';
b = /a+/ig;
console.log(a.match(b)); // si las letras estan juntas saldra un array con codena de las letras juntas

a = 'abaca';
b = /a+/ig;
console.log(a.match(b)); // si estan ceparadar se hara un array con dos cadenas

a = 'goooooolgooooolgoooool';
b = /go*/i; // operador * hace que encuentre la letra 0 o mas veces
// por lo que vi solo funciona si esa letra esta al principio de una cadena
console.log(a.match(b));

a = 'marmota';
b = /m[a-z]a*?/; // lo que se le llama es condicion peresosa
// no se bien que es, hay que investiar

// link freecodecamp del probloma
// https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/regular-expressions/find-characters-with-lazy-matching
console.log(a.match(b))

a = 'no mano es muy turbia';
b = /[^no]/; // caret ^ se usa para buscar coincidencia al principio de una cadena
console.log(a.match(b));
console.log(b.test(b));

b = /[turbia$]/; // se usa simbolo de dolar $ para buscar coincidencia al final de la cadena
console.log(a.match(b));
console.log(b.test(a));

a = 'hola64767647654 frfrf 3443 hola nosenose dsdsdsd hola hola';
b = /\w/ig; // esto es igual a [a-zA-Z0-9_] 
console.log(a.match(b).join())

b = /\d/ig; // esto es igual a [0-9]
console.log(a.match(a).join());

b = /\D/ig;
console.log(a.match(b));

b = /\s/ig;// esto encuentra los espacios en blanco
console.log(a.match(b));

b = /\S/ig;// esto NO encuentra los espacios en blanco
console.log(a.match(b))

// ESTUDIAR esto no entiendo
b = /n{0,6}e/ig; // esto busca un patron
console.log(a.match(b).length)
console.log(a.match(b))

a = 'goooool';
// ESTUDIAR
// aqui lo que pasa es que se usa una inicial para buscar la coincidencia
b = /go{5,}l/ig;
console.log(a.match(b));

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/ig; // Cambia esta línea
let result = timRegex.test(timStr);
console.log(result)
console.log(timStr.match(timRegex));

a = 'blue';
b = /bll?ue3?/ig; // esto es que la letra, numero antes del ? no se muestra
console.log(a.match(b));
console.log(b.test(a));

// capturar y remplazar
a = '  amigo, no tenes hora  ';
//   $1    $2 $3    $4
// asi es como esta agrupada la cadena
b = /(\w+)\s(\w+)\s(\w+)\s(\w+)/ig; // aqui se hace el codigo en definicio de la cadena
let c = '$1 $1 $2 $3 $4 $3' // se usa $ mas el numero para que cambie
// cada parte de la cadena es un trozo 
console.log(a.replace(b, c));

b = /^\s+|\s+$/g;
console.log(a.replace(b, ''));


a = (arr) => {

    return arr
}

console.log(a([3, 4, 5]));

function popShift(arr) {
    let popped; // Cambia esta línea
    let shifted; // Cambia esta línea
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// const f = 1;
// const h = 4;
// arr.splice(f, h, 20, 20)

let h = arr.slice(1, 5)
console.log(h)
console.log(arr);

a = 'lautaro lautaro lautaro';
b = /(tiago|lautaro) diaz/ig;
b = /^(\w+)\s\1\s\1$/ig;
console.log(a.match(b));
console.log(b.test(a));


let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/ig;
let replaceText = ["$1 $1 $3"];
let w = str.replace(fixRegex, replaceText);
console.log(w);

const g = 'freecodecamp';
g[1].toUpperCase();
console.log(g);

function reverseString(str) {
    let a = str.split('')
    let b = a.reverse('');
    let c = b.join('');
    return c
}

console.log(reverseString("hello"));

// Devuelve la longitud de la palabra más larga en la oración proporcionada.
// Tu respuesta debe ser un número.
function findLongestWordLength(str) {
    let string = str.split(' ');
    let cadenaMaxima = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i].length > cadenaMaxima) {
            cadenaMaxima = string[i].length
        }
    }
    return cadenaMaxima;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/* 
Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.
Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].
*/

// function largestOfFour(arr) {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {

//     }
//     return arr;
// }

// // console.log(largestOfFour(
// //     [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


function Auto (color, marca){
    this.color = color;
    this.marca = marca;
}

const compra = new Auto('negro', 'Safiro');
console.log(compra instanceof Auto);
console.log(compra);