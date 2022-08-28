
// funcion SetTimeout
function tiempo(){
    console.log('Saludos despues de 1 seg')
}

setTimeout(tiempo, 1000)

function seg_3(){
    console.log('saludo asíncrono 2 seg')
}

setTimeout (seg_3, 2000);//después de 3 segx
setTimeout ( function(){console.log ('saludo asíncrono 3 seg'), 3000})
setTimeout (() => console.log('saludo asíncrono 4 seg'), 4000) ;