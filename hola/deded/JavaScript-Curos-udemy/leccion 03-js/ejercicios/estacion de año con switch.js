let mes = 11;
let estacion;

if(isNaN(mes)){
    estacion = 'no es un valor numerico'
}
else{
    switch(mes){
        case 1: case 2: case 12:
            estacion = 'Invierno'
            break
        case 3: case 4: case 5:
            estacion = 'Primavera'
            break
        case 6: case 7: case 8:
            estacion = 'Verano'
            break
        case 9: case 10: case 11:
            estacion = 'Otoño'
            break
        default:
            estacion = 'Valor desconociodo'
            break
    }
}

console.log('El mes dado: ' + mes +  ' La estacion es: ' + estacion)