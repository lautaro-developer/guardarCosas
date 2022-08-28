// function Person (name){
//     let client = [];
//     this.name = name;
//     this.getClient = function (){
//         return client
//     }
//     this.addClient = function(clients){
//         client.push(clients);
//     }
// }
// const user = new Person('coca');

// const numClient = ['juan', 'maria', 'sariel'];
// user.addClient(numClient);
// console.log(user.getClient());

// class Person2{
//     constructor(name){
//         let agregar = []
//         this.name = name;
//         this.get = function(){
//             return agregar
//         }
//         this.add = function(agrega){
//             agregar.push(agrega)
//         }
//     }
// }
// const user2 = new Person2('user');
// user2.add(numClient);
// console.log(user2.get())

// class Person {
//   constructor(name, lastName) {
//     this._name = name;
//     this._lastName = lastName;

//     this._nameComplete = function () {
//       return `firls name: ${this._name}
//   last name: ${this._lastName}`;
//     };
//     let client = [];
//     this.get = function () {
//       return client;
//     };
//     this.add = function (add) {
//       client.push(add);
//     };
//   }
//   get name() {
//     return this._name;
//   }
//   set(name) {
//     this._name = name;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   set(lastName) {
//     this._lastName = lastName;
//   }
// }

// const user = new Person("Ruben", "Diaz");
// console.log(user._nameComplete());

// const user2 = new Person("Jorge", "frfr");
// console.log(user2._nameComplete());

// Person.prototype.saludar = function () {
//   return `Hi my name is ${this._name}`;
// };
// const user3 = new Person(user);
// user3.father = user;
// console.log(user3.father.saludar());

// let array = {
//   name: "facu company",
//   clien: [],
// };
// array.clien.push(user._name);
// console.log(array);

// user.add({
//     name: 'nose',
//     apellido: 'lucas',
//     numero: 22331155,
//     correo: 'jose@gmail.com',
// })
// console.log(user.get())

// herencia
class Person {
  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
  }
}
const user = new Person("hola", "hola");
user;

class Programmin extends Person {
  constructor(name, lastName, language) {
    super(name, lastName);
    this._language = language;
    this._programminPerfile = () => {
      return {
        name: this._name,
        lastName: this._lastName,
        language: this._language,
      };
    };
  };
};

const programmin = new Programmin("Ruben", "Diaz", "ES-AR");
console.log(programmin._programminPerfile());

class Marca {
  constructor(marca) {
    this._marca = marca;
  }
}
const marca = new Marca("google");
marca;

class Modelo extends Marca {
  constructor(marca, modelo) {
    super(marca);
    this._modelo = modelo;

    //-------AGREGAR TELEFONOS-------\\
    let telefonoGoogle = [];
    this._get = () => {
      return `Telefonos de Google: ${telefonoGoogle}`;
    };
    this._add = (google) => {
      telefonoGoogle.push(google);
    };
    //-------AGREGAR TELEFONOS-------\\

    //-------TELEFONO Y COMPAÑIA JUNTOS-------\\
    this._compañiaYTelefonoJuntos = () => {
      return `La compañia es: ${this._marca}, y el modelo de celular es: ${this._modelo}`;
    };
    //-------TELEFONO Y COMPAÑIA JUNTOS-------\\
  }
}

const modelo = new Modelo("google", "pixel");
let modeloTelefono = ["pixel", "ONE", "Nokia"];
modelo._add(modeloTelefono);
console.log(modelo._get());
console.log(modelo._compañiaYTelefonoJuntos());
