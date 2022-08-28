const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const exReg = {
  nombre: /^[a-z\-\_]{4,20}$/gi,
  usuario: /^[a-z\-\_\s]{6,10}$/gi,
  password: /^[a-z0-9\!\(\)\%\!\"\#]$/gi,
  password2: /^[a-z0-9\!\(\)\%\!\"\#]$/gi,
  edad: /^\d{1,3}$/gi,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(exReg.nombre, e.target, "nombre");
      break;
    case "usuario":
      break;
    case "pass":
      break;
    case "pass2":
      break;
    case "age":
      break;
  }
};

/**
 *
 * @param {Object} exprecion se le da una exprecion regular
 * @param {string} input se le da el name del input
 * @param {*} campo
 */
const validarCampo = (exprecion, input, campo) => {
  if (exprecion.test(input.value)) {
    document.querySelector("#nombre").classList.add("input-correcto");
    document.querySelector("#nombre").classList.remove("input-incorrecto");
  } else {
    document.querySelector("#nombre").classList.add("input-incorrecto");
    document.querySelector("#nombre").classList.remove("input-correcto");
  }
};
inputs.forEach((i) => {
  i.addEventListener("keyup", validarFormulario);
  i.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
