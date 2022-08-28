class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProductos = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }
  get idProductos() {
    return this._idProductos;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  datoProducto() {
    return (
      "precio del producto: " +
      this.precio +
      ", nombre del producto: " +
      this._nombre +
      ", id del producto: " +
      this.idProductos
    );
  }
  toString() {
    return this.datoProducto();
  }
}

class Orden {
  static contadorOrden = 0;
  static get MAX_PRODUCTOS() {
    return 5;
  }
  constructor() {
    this._idOrden = ++Orden.contadorOrden;
    // el arreglo se usa pra agregar productos,
    // ya que en el metodo agregarProductos se agregan los productos
    this._producto = [];
    this._contadorProductosAgregados = 0;
  }
  get idOrden() {
    return this.idOrden;
  }
  // se hace un metodo y pasa un parametro
  agregarProductos(producto) {
    // con .length se da el numero de productos
    if (this._producto.length < Orden.MAX_PRODUCTOS) {
      // en caso que no se exceda del limine se ejecutara esta parte
      this._producto.push(producto);
    } else {
      console.log("Se alcanso el max de producto");
    }
  }

  calcularTotal() {
    let totalVenta;
    // para iterar el arreglo de producto
    // se da una variable que contendra los valores de el arreglo producto
    // of para dar que arreglo va a interar/recorrer
    // y el arreglo
    for (let producto of this._producto) {
      // totalVenta guarda los precios
      totalVenta += producto.precio; // totalVent = totalVenta + producto precio
    }
    return totalVenta;
  }
  mostrarOrden() {
    let productoOrnde;
    for (let producto of this._producto) {
      // los elementos que itera el ciclo for se vuelven string
      productoOrnde += producto.toString() + " ";
    }
    console.log(
      `Orden: ${this._idOrden}, Total: ${this.calcularTotal}, Producto: ${productoOrnde}`
    );
  }
}

const producto1 = new Producto("Manzana", "150.00$");
console.log(producto1.toString());

const orden1 = new Orden();
orden1.agregarProductos(producto1);
// orden1.agregarProductos(producto2);

orden1.mostrarOrden();
