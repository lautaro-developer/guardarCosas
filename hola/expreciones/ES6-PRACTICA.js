const noMuta = {
    llave: 'candado',
    arma: 'pica',
    za: 'na',
}

// Object.freeze(noMuta)
noMuta.arma = 10;
// console.log(noMuta);

// doc:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// ----------------- Propagacion -----------------

const arrayPropagacionNumeros = [0,1,1,2,3,4,7,10,50];
const arrayPropagacionPalabras = ['hola','hola','hola','hola','hola',];
// console.log(Math.max(...arrayPropagacionNumeros));
// console.log([...arrayPropagacionPalabras]);

// ----------------- Desectructuracion -----------------
let obj = {
    nombre: 'Lautaro',
    apellido: 'Diaz',
}

let nombre2 = obj.nombre;
let apellido2 = obj.apellido;
// console.log(nombre, apellido, '-', 'ES6'); Lautaro Diaz - ES6

let {nombre3} = obj;
let {apellido3} = obj;
// console.log(nombre, apellido, '-', 'ES6')

let {nombre: ruben} = obj;
let {apellido: rlonso} = obj;

let objCambiarValor = {
    user1: {
        nombre: 'Lautaro',
        apellido: 'Diaz',
        dni: 123333456,
    },
    user2: {
        nombre: 'Ruben',
        apellido: 'Alonso',
        dni: 2213423,
    }
}
let low = 'marge';
const user1 = {user1: {nombre: low, apellido: low}} = objCambiarValor;
// console.log(user1);

// desectruturar un array:
let array = [1,2,4,5,6,7,8];

let arrayLeng = array.length;
// const  [x,y,t,g,,,v] = array;
// console.log(x,y,t,v);

let arrayFun = (e)=>{
    const  [x,y,t,g,v] = e;
    console.log(x,y,t,g,v)
}
arrayFun(array);

// operador rest

let restFuntion = (a, b, ...rest)=>{
    console.log(rest)
    console.log(a)
    console.log(b)

}
// console.log(restFuntion(1,2,3,4,5,6,7,8,9));

// desectructurar obj desde una funcion:
let objFun = {
    1: 'nombre',
    2: 'a',
    3: 'nmbre'
}
// const {1: wo} = objFun;
// console.log(wo);
let objFuntionDes = ({1: wo})=>{
    return {1: wo};
}
console.log(objFuntionDes(objFun));

// funcion dentro de obj
let objDentroFun = {
    a(e = 20){
        console.log(e)
    }
}
objDentroFun.a();

b=10;
c=20;
d=b+c
console.log(d);