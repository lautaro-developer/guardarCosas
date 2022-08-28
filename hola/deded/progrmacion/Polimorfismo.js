//--------------Polimorfismo Sobrecarga--------------\\
class Sobrecarga{
  constructor(name, lastname){
    this._name = name;
    this._lastname = lastname;

    this._sobreFun = (x)=>{
      return x.toString().length
    }

    this._sobreFun2 = (x = 0, y = 0, z = 0)=>{
      return x + y + z
    }

  }
}

class Person extends Sobrecarga{
  constructor(language, name, lastname){
    super(name, lastname);
    this._language = language;
    this._nombreCompleto = ()=>{
      return {
        nombre: this._name,
        apellido: this._lastname,
        lenguage: this._language,
      }
    }
  }
}
const user = new Person('javascript', 'Ruben', 'Diaz');
console.log(user._nombreCompleto())
const a = new Sobrecarga()
console.log(a._sobreFun(3343454));
console.log(a._sobreFun2(20,20,20))