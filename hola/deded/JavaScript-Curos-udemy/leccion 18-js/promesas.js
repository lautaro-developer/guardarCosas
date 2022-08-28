
// las promesas son funciones callback que resiven dos parametros 
let miPromesa = new Promise((resolver, rechazar) => {
    // se crea una variable que contendra el valor true/false
    let verdadero = true;
    // if para preguntar
    if(verdadero){
        // se manda a llamar los parametros y se le da un valor
        resolver('Resulelto');
    }
    else{
        rechazar('falso');
    }
});

// se llama a la promesa con .then y se crea funciones flecha
// que sirven como valores para imprimit la promesa
miPromesa.then(
    (V) => {console.log(V)},
    (F) => {console.log(F)}
);
/*
// imprimit con catch
miPromesa
.then((valor) => {console.log(valor)})
.catch((error) => {console.log(error)})
*/

let miPromesa1 = new Promise((resolver) => {
    setTimeout(() => console.log('Inicio promesa'), 1000)
    setTimeout(() => resolver('Hola pa desde promesa con setTimeout'), 2000)
    setTimeout(() => console.log('Fin promesa'), 3000)
});

miPromesa1.then(
    (valor) => {console.log(valor)}
);

//async indica que una función regresa una promesa
// se utiliza async para forsar que es una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}


miFuncionConPromesa().then(valor => console.log(valor));