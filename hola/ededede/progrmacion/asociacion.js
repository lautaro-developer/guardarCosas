class Person {
  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
  }
}

const user1 = new Person("Ruben", "Diaz");
const user2 = new Person("Lautaro", "Alonso");

user1.no = user2;
console.log(user1.no);
console.log(user1);

// aqui se crea una clase con dos instancias. Despues se usa la primera instancia para crear un parametro nuevo y se le agrega el valor de user 2
