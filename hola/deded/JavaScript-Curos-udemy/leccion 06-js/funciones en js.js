/* declarar la funcion
 la function es un bloque de codigo que podamos llamar cuantas veces querramos
 primero se utiliza function + 'nombreDeLaFuncion' (argumentos){
 uerpo de la funcion
}
*/

function miFuncion (a,b){
	// console.log('Suma:',(a+b))
	return a+b
}

// se llama la function y se pasa los valores
miFuncion(2,5)


// console.log(miFuncion(2,3))

// declarar un function dentro de una variable

// let x = function(a, b){return a+b};
// resultado = x(2, 2)
// console.log(resultado)

// function que se llama a si misma pero solo se puede llamar una vez

(function(a, b){
	console.log('suma2:', (a+b));
})(2,3);