const ingresos = [
  new Ingreso("Sueldo", 2100),
  new Ingreso("Regalo", 900),
  new Ingreso("Robo", 1000),
];

const egresos = [new Egreso("Nafta", 10020), new Egreso("Fernet", 0)];

let cargarapp = () => {
  cargarCabecero();
  cargarIngreso();
  cargarEgreso();
};

let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};
let totalIngreso = () => {
  let totalIngresos = 0;
  for (let ingreso of ingresos) {
    totalIngresos += ingreso.valor;
  }
  return totalIngresos;
};

let cargarCabecero = () => {
  let presupuesto = totalIngreso() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngreso();
  document.getElementById("presupuesto").innerHTML = formato(presupuesto);
  document.getElementById("porcentaje").innerHTML = formato2(porcentajeEgreso);
  document.getElementById("ingreso").innerHTML = formato(totalEgresos());
  document.getElementById("egreso").innerHTML = formato(totalEgresos());
};

const formato = (moneda) => {
  return moneda.toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};
const formato2 = (moneda) => {
  return moneda.toLocaleString("es-US", {
    style: "percent",
    minimumFractionDigits: "2",
  });
};

const cargarIngreso = () => {
  let ingresoHTML = "";
  for (let ingreso of ingresos) {
    ingresoHTML += cargarIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresoHTML;
};

// codigo HTML para remplazar el ingreso
const cargarIngresoHTML = (ingreso) => {
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formato(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <butto class="elemento_eliminar--btn">
          <ion-icon name="close" onclick="eliminarIngreso(${
            ingreso.id
          })"></ion-icon>
        </butto>
      </div>
      </div>
  </div>
  `;
  return ingresoHTML;
};
const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => {
    ingreso.id === id;
  });
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngreso();
};

const cargarEgreso = () => {
  let egresoHTML = "";
  for (let egreso of egresos) {
    egresoHTML += cargarEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresoHTML;
};
const cargarEgresoHTML = (egreso) => {
  let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formato(egreso.valor)}</div>
      <div class="elemento_porcentaje">${formato2(
        egreso.valor / totalEgresos()
      )}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close" 
          onclick="eliminarEgreso(${egreso.id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>
    `;
  return egresoHTML;
};
const eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egreso) => {
    egreso.id === id;
  });
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgreso();
};

let agregarDato = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let valor = forma["valor"];
  let descripcion = forma["descripcion"];
  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, number(valor.value)));
      cargarCabecero();
      cargarIngreso();
    } else if (tipo.value === "egreso") {
      egresos.push(new Egreso(descripcion.value, number(valor.value)));
      cargarCabecero();
      cargarEgreso();
    }
  }
  document.getElementById("agregarDatoBtn").onclick = agregarDato();
};

document.getElementById("cargarApp").onload = cargarapp();
