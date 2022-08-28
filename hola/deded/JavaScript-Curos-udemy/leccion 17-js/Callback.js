// la funcion callback se usa para llamar a otra funcion desde su nombre

// se da un parametro y se imprime
function imprimir (mensaje){
    console.log(mensaje)
} 

// se le da los parametros y uno que se usa para llamar a la funcin
function suma (op1, op2, mensaje){
    let res = op1+op2;
    // se llama el parametro con la variable
    mensaje(`Resultado: ${res}`)
}

suma(2,5, imprimir) // se pasa los parametro el nombre de la funcion