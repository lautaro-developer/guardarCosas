let suma = (document.getElementById("sumar").onclick = sumar1);
let restar = (document.getElementById("restar").onclick = restar1);
let div = (document.getElementById("div").onclick = div1);

function sumar1() {
  const form = document.getElementById("form");
  let operandoA = form["operandoA"];
  let operandoB = form["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  document.getElementById("resultado").innerHTML = `resultado de la suma: ${resultado}`;

  //   let resultado1 = parseInt(operandoA.value) - parseInt(operandoB.value);
  //   document.getElementById("resultado").innerHTML = `resultado: ${resultado1}`;
}

function restar1(){
  const form = document.getElementById("form");
  let operandoA = form["operandoA"];
  let operandoB = form["operandoB"];
  let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
  document.getElementById("resta").innerHTML = `resultado de la resta: ${resultado}`;
}

function div1(){
  const form = document.getElementById("form");
  let operandoA = form["operandoA"];
  let operandoB = form["operandoB"];
  let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
  document.getElementById("div").innerHTML = `resultado de la divicion: ${resultado}`;
}