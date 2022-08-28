class Persona {
  static contadorPersona = 0;
  constructor(medida, resolucion) {
    this._idPersona = ++Persona.contadorPersona;
    this._medida = medida;
    this._resolucion = resolucion;
  }

  get persona() {
    return this._idPersona;
  }

  // medida
  get medida() {
    return this._medida;
  }
  set medida(medida) {
    this._medida = medida;
  }

  // resolucion
  get resolucion() {
    return this._resolucion;
  }
  set resolucion(resolucion) {
    this._resolucion = resolucion;
  }

//   toString() {
//     return `
//   id del producto: ${this._idPersona},
//   Medida: ${this._medida},
//   Resolucion: ${this._resolucion}`;
//   }
}

const persona1 = new Persona("1080x728", "720px");
console.log(persona1.toString());

class Soft extends Persona {
  static contadorSoft = 0;
  constructor(medida, resolucion, procesador, ram) {
    super(medida, resolucion);
    this._idSoft = ++Soft.contadorSoft;
    this._procesador = procesador;
    this._ram = ram;
  }
  get Soft() {
    return this._idSoft;
  }

  get procesador() {
    return this._procesador;
  }
  set procesador(procesador) {
    this._procesador = procesador;
  }

  get ram() {
    return this._ram;
  }
  set ram(ram) {
    this._ram = ram;
  }
  toString(){
      return `id del software: ${this._idSoft}, Procesador: ${this._procesador}, Ram: ${this._ram}`
  }
}

let software1 = new Soft('Mediatek', '3GB/1.5BG utilizable')
console.log(software1.toString())
