console.log('Operadores :a=2 b=3')

console.log('')

let suma = a = 2, b = 3;
resultado = (a+b) //forma de sumar valores
console.log('El resultado de la suma + es: '  + resultado)

// forma propia de imprimir matematicas
// si se pune entre ( ) el valor de estos se suma 
// console.log('El valor es: ' + (a+b) )

// resta en JS con: -
resultado = a-b;
console.log('El resultado de la resta - es: ' + resultado)

// multiplicasion es JS con: *
resultado = a*b;
console.log('El resultado de la multi * es: ' + resultado)

// esponente en JS con: **
resultado = a**b;
console.log('El resultado de la esponente ** es: ' + resultado)

// divisor/divicion cen JS con: /
resultado = a/b
console.log('El resultado de la divicion / es: ' + resultado)

// residuo de la divicion en JS con: %
resultado = a%b
console.log('El resultado de el residui % es: ' + resultado)

console.log('')

// Incremento

// Pre-incremento (el operador ++ va antes de la variable)
resultado = ++a
console.log('Resultade del pre-incremento ++ es: ' + resultado)
console.log('La variable se le da un incremento: ' + a)

// Pos-incremento (el operador ++ va despues de la variable)
resultado = a++
console.log('aaa: ' + resultado)
console.log('ssss: ' + a)

console.log('')

// Decremento

// Siguiendo la misma logia del Incremento
resultado = --a
console.log('Resultado del Pre-decremento -- es: ' + resultado)
console.log('variable a en pre-decremento: ' + a)

console.log('')

// Pos-decremento
resultado = a--;
console.log('Resultado del pos-decremento: ' + resultado)
console.log('variable a en pos-decremento: ' + a)