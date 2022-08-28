class Person {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
}

class Bank extends Person {
  constructor(dinero, nombre, apellido) {
    super(nombre, apellido);
    this._dinero = dinero;
  }
}

class Friend extends Bank {
  constructor(nombre, apellido, dinero, amigos) {
    super(nombre, apellido, dinero);
    let amigosFav = [];
    this._amigos = amigos;

    this._funAmigo = () => {
      return amigosFav;
    };
    this._funAgregarAmigos = (ami) => {
      amigosFav.push(ami);
    };
  }
  vidaCompleta() {
    return `
      nombre completo ${this._nombre} ${this._apellido}
      saldo: ${this._dinero}
      amigos: ${this._funAmigo()}
      `;
  }
}
const user = new Friend(200, "Ruben", "Diaz", "dede", "dedwdw");
let amigos = ["juan ", "arrie ", "rodolfo"];
user._funAgregarAmigos(amigos);
console.log(user.vidaCompleta());


let persona = {
  nombre: 'dd',
  amigos: []
}
persona.amigos.push(user._nombre)
persona