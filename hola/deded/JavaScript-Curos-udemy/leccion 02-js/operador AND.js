let preguntar = 2

let valorMax = 0, valorMin = 10;

/* el operador AND evalua si las dos operaciones las expreciones y si una es falsa toda la explecion es falsa */

if(preguntar >= valorMax && preguntar <= valorMin){
    console.log('Dentro de rango > operador AND')
}
else{
    console.log('Fuera de rango > operador AND')
}


// operador or regresa true si cualquiera de las expreciones regresa true

let a = diaDescanso = false, vacasiones = false;
// let a = diaDescanso = false, vacasiones = true; si alguna expresion es true regresa true

if(diaDescanso || vacasiones){
    console.log('operador or > Puede ir')
}
else{
    console.log('operador or > Esta ocupado')
}

// el operador ternario es similiar a un if, else. 
// se tiene el condicional y despues dos explresiones 
let suma = 2>1 ? 'verdadero' : 'falso';
console.log('operador ternario >' ,suma)

let num = 9;
suma = num % 2 ==0 ? 'Numero par' : 'Numero inpar';
console.log('par en inpar con operador ternario >', suma);