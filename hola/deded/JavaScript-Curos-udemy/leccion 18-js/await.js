// promesa con async y await 
// await se utiliza para esperar a la promesa


// await solo se puede usar en una funcion que tenga async
async function miFuncionConPromesaAwait(){
    let miPromesa = new Promise ((resolver) =>{
        resolver('promesa con await')
    });
    // se usa await y despues el nombre de la variable que
    // contiene la promesa
    console.log(await miPromesa)
}

miFuncionConPromesaAwait();

