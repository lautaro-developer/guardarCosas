class Person {
  constructor(name, lastname){
    this._name = name;
    this._lastname = lastname;
  }
}

class Programmin extends Person{
  constructor(language, name, lastname){
    super(name, lastname);
    this._programmin = language;
  }
}

const user = new Programmin('JS', 'Ruben', 'Diaz');
user.job = function(){
  return {
    nombre: this._name,
    apellido: this._lastname,
    lenguage: this._programmin,
  }
}
console.log(user.job())