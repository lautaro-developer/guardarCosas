function Auto (color, marca){
    let colorVidrio = 'white';

    this.color = color;
    this.marca = marca;
    // para evitar que se tengan variables que se repitan en mas constructores se usa prototype
    Auto.prototype.vidrio = colorVidrio;
}

Auto.prototype.datos = {
    constructor: Auto,
    precio: 1600,
    colorMatricula: 'white',
    numeroMatricula: '12-43-12',
}


const compra = new Auto('negro', 'Safiro');
console.log(Auto.prototype.isPrototypeOf(compra));
let agregarCambio = []
let agregarCambioNuevo = []
console.log(compra instanceof Auto); // se usa instanceof para saber si es una instancio
console.log(compra);


for(let a in compra){
    if(compra.hasOwnProperty(a)){
        agregarCambio.push(a);
    }
}
console.log(agregarCambio);

for(let a in compra){
    if(compra.hasOwnProperty(a)){
        agregarCambio.push(a);
    } else {agregarCambioNuevo.push(a)}
}

console.log(agregarCambio);
console.log(agregarCambioNuevo);
console.log(Auto.prototype);
console.log(Auto.prototype.datos);
console.log(compra.constructor === Auto);
console.log(compra instanceof Auto)