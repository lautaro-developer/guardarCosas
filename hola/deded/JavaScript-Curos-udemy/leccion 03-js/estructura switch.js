let numero = 1;

let numeroTexto;

switch(numero){
    case 1:
        numeroTexto = 'Uno'
        break
    case 2:
        numeroTexto = 'Dos'
        break
    case 3:
        numeroTexto = 'Tres'
        break
    default:
        numeroTexto = 'Ni idea de ese numero'
        break
}

console.log('El valor dado:',numero,'Se transformo a cadena:',numeroTexto)