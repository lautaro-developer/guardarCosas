const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const exReg = {
  nombre: /[a-z]{4,10}/,
};

const validarForm = (e) => {
  switch (e.target.name) {
    case "name":
      validarCampo(exReg.nombre, e.target);
      break;
  }
};

const validarCampo = (exprecion, input) => {
  if (exprecion.test(input.value)) {
    document.querySelector("#name").classList.add("correcto");
    document.querySelector("#name").classList.remove("incorrecto");
  } else {
    document.querySelector("#name").classList.remove("correcto");
    document.querySelector("#name").classList.add("incorrecto");
  }
};

inputs.forEach((i) => {
  i.addEventListener("keyup", validarForm);
  i.addEventListener("blur", validarForm);
});
