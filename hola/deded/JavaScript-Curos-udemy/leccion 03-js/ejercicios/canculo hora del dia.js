let hora = '2';
let mensaje;

if(isNaN(hora)){
    console.log('Valor desconosido')
}
else{
    if(hora >= 6 && hora <= 11){
        mensaje = 'Buenos dias'
    }
    else if(hora >= 12 && hora <= 18){
        mensaje = 'Buenas tardes'
    }
    else if(hora >= 19 && hora <= 24){
        mensaje = 'Buenas noches'
    }
    else if(hora >= 0 && hora <= 6){
        mensaje = 'Hora de la paja'
    }
    else{
        mensaje = 'Valor desconosido'
    }    
}

console.log('La hora selecsionada es:',hora,'El horario es:',mensaje)