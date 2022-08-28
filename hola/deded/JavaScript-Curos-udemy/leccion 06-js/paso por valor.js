// los tipo primitivo son cuales no tienen propiedades ni metodos
let x = 10;

function cambiarValor(a){
	a = 20;
}

// paso por valor
// 	significa que se hace una copia de la variable 'x' a la variable 'a'
cambiarValor(x);
console.log(x)

// si se manda a llamar 'a' dara que no esta definida 
cambiarValor(a)
console.log(s)