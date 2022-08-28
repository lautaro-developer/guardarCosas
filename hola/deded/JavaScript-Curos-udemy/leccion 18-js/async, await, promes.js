async function projecto(){
    console.log('Inicio')
    let promesa = new Promise( (resolver) => {
        // al poner { }/llaves no se omprime en el tiempo dado
        setTimeout(() => resolver('Resuleto con exito'), 5000 );
    });
    console.log( await promesa );
    console.log('Fin')
}

projecto();