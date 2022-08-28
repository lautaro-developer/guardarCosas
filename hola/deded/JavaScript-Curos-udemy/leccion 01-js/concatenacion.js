let nombre = 'jorge';
let apellido = 'correa';

// la concatenacion es con el simbolo "+" pero esto se suma si son number/numeros
let nameComplete = nombre + '-' + apellido;
console.log(nameComplete)

// concatenar de manera mas simple
let nombre2 = 'david' + ' ' + 'fereira'
console.log(nombre2)

// concatenar numeros
// si quiero concatenar numeros tengo que hacer string a un numero
let num = 10
let num2 = '2'
resultado = num + num2
console.log(resultado)

// aqui se concatena el string con el numero
let nombre3 = nombre + 123
console.log(nombre3)

// si se tiene los parentecis ( ) se sumaran los numeros
nombre3 = nombre + '-' + (1+2+3);
console.log(nombre3)

// la logica de js es que todo se imprime de izquierda a derecha
nombre3 = 1+2+3 + '-' + nombre
console.log(nombre3)