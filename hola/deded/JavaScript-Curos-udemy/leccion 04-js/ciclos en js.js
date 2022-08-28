/*
 El ciclo whike es que se imprime hasta que salga false
 se le tiene que agregar un pos-incremento por que si no se da el caso de se haga un ciclo infinito de ceros (0)

let contador = 0;       numero dado


while(contador < 3){    el 3 son las veces que se imprimin hasta que llege al numero dado
    console.log('ciclo while',contador);
    contador++;         pos-invcremento
}

do{
    console.log('ciclo do while',contador);
    contador++
}while(contador < 3)
*/

/*
en el ciclo for se crea la variable desde el mismo
el ciclo for consta de tres zonas. Una donde se crea la variable, otra donde le damo la condicion por cuanto se imprime y el pos-incremento
*/

for(let contador = 0; contador < 4; contador++){
    console.log(contador)
}