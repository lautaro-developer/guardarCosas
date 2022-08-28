/* se pregunta si dos valores son iguales
en caso de serlo da verdadero (True) pero
si son falso (False)
*/

let suma = a=2, b=4, c='2';

// saber si los valores para ver si son iguales
//   revisa los valores, da igual si son numero o cadena, si los valores son iguales da True
suma = a==c;
console.log('== comparador' ,suma)

/* comparador agresivo
    analiza los valores y los tipos
    "saber si a es exactamente igual a c" con === */ 
suma = a===c
console.log('=== comparador agresivo' ,suma)

/* comparador distinto A
    °analiza los valores 
    °saber si a es distinto de c con !=
*/
suma = a!=b
console.log('!= distinto A' ,suma)

/* comparador distinto A de manera extricta 
    °analiza los valores pero tambien los tipos
        "saber si 'a' es exactamente diferente a 'c'" con !==
*/
suma = a!==c
console.log('!== distinto extricta A' ,suma)

// operadores igual mayor que '<=' '<' menor que '>=' '>'

// operador menor que
    // 'a' es menor que 'c'
suma = a<c;
console.log('< "a" es menor que "b": ' ,suma);


suma = a<=c;
console.log('<= "a" es igual o mayor "b" :' ,suma);

// operador mayor igual que >= >

// operador menor que
    // 'a' es mayot que 'c'
suma = a>c;
console.log('> "a" es mayor que "b" :', suma);

suma = a>=c;
console.log('>= "a" es mayor o igual a "b" :', suma);