class DispositivoEntrada {
  constructor(marca, tipoEntrada) {
    this._marca = marca;
    this._tipoEntrada = tipoEntrada;
  }
  get marca() {
    return this_.marca;
  }
  set marca(marca) {
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRaton = 0;

  constructor(marca, tipoEntrada) {
    super(marca, tipoEntrada);
    this._idRaton = ++Raton.contadorRaton;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return `Raton   > [idRaton:   ${this.idRaton}, Marca: ${this._marca}, Entrada: ${this._tipoEntrada}]`;
  }
}

class Teclaso extends DispositivoEntrada {
  static contadorTeclado = 0;

  constructor(marca, tipoEntrada) {
    super(marca, tipoEntrada);
    this._idTeclado = ++Teclaso.contadorTeclado;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `Teclado > [idTeclado: ${this.idTeclado}, Marca: ${this._marca}, Entrada: ${this._tipoEntrada}]`;
  }
}

class Monitor {
  static contadorMonitor = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitor;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }

  get tamaño() {
    return this._tamaño;
  }
  set tamaño(tamaño) {
    this._tamaño = tamaño;
  }

  toString() {
    return `Monitor > [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
  }
}

class Computador {
  static contadorComputador = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputador = ++Computador.contadorComputador;
    // aqui se agrega los parametos de otras clases
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
  toString() {
    return `computadora: ${this._idComputador}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
  }
}

class Orden {
  static contadorOrden = 0;

  static get MAX_ORDEN() {
    return 5;
  }
  constructor() {
    this._idOrden = ++Orden.contadorOrden;
    this._computadora = [];
  }
  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(Computador) {
    if (this._computadora < Orden.MAX_ORDEN) {
      this._computadora.push(Computador);
    } else {
      console.log("no se agregan mas productos");
    }
  }

  mostrarOrden() {
    let contadorCompu;
    for (let computadora of this._computadora) {
      contadorCompu += ` \n ${computadora}` + " ";
    }
    console.log(`idOrden: ${this._idOrden}, compu: ${contadorCompu} `);
  }
}

const entrada1 = new DispositivoEntrada("Red Dragon", "VGA");
console.log(entrada1);

const raton1 = new Raton("HP", "HDMI");
const raton2 = new Raton("AMD", "BT");
console.log(raton1.toString());
console.log(raton2.toString());

const teclado1 = new Teclaso("Samsung", "HDMI mini");
const teclado2 = new Teclaso("Rycert", "WI-FI");
console.log(teclado1.toString());
console.log(teclado2.toString());

const monitor1 = new Monitor("Samsung", "1080x720p");
const monitor2 = new Monitor("Xiaomi", "1080x720p");
console.log(monitor1.toString());
console.log(monitor2.toString());

// se manda  a llamar los otras variables
const pc1 = new Computador("HP", raton1, teclado1, monitor1);
console.log(pc1.toString());

const pc2 = new Computador("HP", raton2, teclado2, monitor2);
// console.log(pc2.toString())

// si no se quiere usar el metodo toString, se puede usar template string ``
console.log(`${pc2}`);

const orden1 = new Orden();

orden1.agregarComputadora(pc1);
orden1.agregarComputadora(pc2);
orden1.mostrarOrden();
