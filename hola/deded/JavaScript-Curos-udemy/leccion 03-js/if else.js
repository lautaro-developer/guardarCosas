/* las funciones if else se manejan de manera true o false, V o F.

    --------valor--------
    true            false
      |               |
      |               |
      |               |
      |---fin del programa
 


let a = true;

if (a){
    console.log('Verdadero')
}
else{
    console.log('Falso')
}

// el operador else if se usa para preguntar de nuevo, ya que no se puede usar de nuevo el if
let numero = '4';

if(isNaN(numero)){
    console.log('No es un numero')
}
else{
    if(numero == 1){
        console.log('Numero uno')
    }
    else if(numero == 2){
        console.log('Numero dos')
    }
    else if(numero == 3){
        console.log('Numero tres')
    }
    else{
        console.log('Valor desconosido')
    }
}
*/

let game = prompt('Escribi un juego de PS2');
let bestGame;

if (game == 'gta san andreas' || game == 'dbz bt3' || game == 'black'){
    console.log('Mejor juego de PS2 de Sony')
}
else if (game == 'skirym' || game == 'gta v' || game == 'cod mw2'){
    console.log('mejor juego de PS3 de Sony')
}
else if (game == 'red dead redemtion' || game == 'elder ring' || game == 'god of war (2018)'){
    console.log('mejor juego de PS4 de Sony')
}
else{
    console.log('No es best game panita')
}