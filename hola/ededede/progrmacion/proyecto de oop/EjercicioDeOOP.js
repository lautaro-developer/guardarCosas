class Productos {
  constructor(nombre, precio, año) {
    this._nombre = nombre;
    this._precio = precio;
    this._año = año;
  }
}

class UI {
  addProduct(p) {
    const productList = document.getElementById("lista-de-productor");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card border-primary mb-3 card-border-js" style="max-width: 20rem;">
      <div class="card-header card-header-js">Lista de productos</div>
      <div class="card-body card-body-js">
      <strong>Productos</strong>: ${p._nombre}
      <br>
      <strong>precio</strong>: ${p._precio}
      <br>
      <strong>año</strong>: ${p._año}
      <a href="#" id="btnEliminarElemento" class="btn btn-outline-danger" name="eliminar">Eliminar</a>
      </div>
    </div>
    `;
    productList.appendChild(element);
    // this.resetForm();
  }

  deleteProduct(element) {
    if (element.name === "eliminar") {
      element.parentElement.parentElement.remove();
    }
  }

  showMessage(m, cssClass) {
    const div = document.createElement("div");
    div.className = `table-success${cssClass}`;
    div.appendChild(document.createTextNode(m));

    // mostrar en el UI
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");
    container.insertBefore(div, app);

    setTimeout(()=>{
      document.querySelector('.table-success').deleteProduct();
    }, 3000)
  }
}

// Evento del DOM
document.getElementById("form del producto").addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const año = document.getElementById("año").value;
  e.preventDefault();
  
  const productos = new Productos(nombre, precio, año);
  const ui = new UI();
  ui.addProduct(productos);
  ui.showMessage("Nota guardada", "table-success");
  // ui.resetForm();
});
document.getElementById("lista-de-productor").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
