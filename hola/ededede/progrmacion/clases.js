class Person1 {
  constructor(firlName, lastName) {
    this._firlName = firlName;
    this._lastName = lastName;
    this._nameComplete = function () {
      return `Nombre completo: ${this._firlName} ${this._lastName}`
    };
  }
}
const user11 = new Person1('Ruben', 'Diaz');
console.log(user11._nameComplete().toUpperCase());

class Person2 {
  constructor(name, lastName, age) {
    this._name = name;
    this._lastName = lastName;
    this._age = age;
  }
}
const user21 = new Person2("Lautaro,", "Hijo de Ruben y Karina", 20);
user21.nombreCompleto = function (){
  return `Nombre completo: ${this._name} ${this._lastName}. Edad: ${this._age}`
}
console.log(user21.nombreCompleto());

class Person3 {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  nameComplete = function () {
    return `${this.name} ${this.lastName}`;
  };
}

const user = new Person3("dede", "dede");
user.pather = function () {
  return `Hola, mi nombre es ${this.name}`;
};
console.log(user.pather());
console.log(user.nameComplete());

class Person4 {
  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
  }
  agregar() {
    let a = [];
    return a;
  }
}

class Person5 {
  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
  }
  nameComplete() {
    return `${this._name} ${this._lastName}`;
  }
}

const user5 = new Person5("Bele", "Rial");
// asociacion:
// se crea un nueva const que almacene los valores en los parametros
const user51 = new Person5("babel", "neto");

// aqui se crea un OBJ nuevo que contenga los valores de user51
user.friend = user51;
// si se llama a user (que aquel le pasamos los paramtros de user51) imprimido se mostrara
console.log(user51);

// agregacion:
// es agregar una instancia de una clase a una variable
let agent = {
  name: "facu company",
  client: [],
};
// se crea (o usa) una instancia
const user52 = new Person5("maria", "enrique");
// como es un array que le pasamos, se obtiene de la misma
// se llama a la funcion OBJ se accede al array y se usa el metodo push para agregar las instancias
agent.client.push(user52, user51);

let a = [];
a.push(user51);
