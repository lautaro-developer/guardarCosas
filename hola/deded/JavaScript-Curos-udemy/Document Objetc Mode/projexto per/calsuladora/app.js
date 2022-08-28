const suma1    = document.getElementById('suma').onclick = suma;
const resta1   = document.getElementById('resta').onclick = resta;
const multi1   = document.getElementById('multi').onclick = multi;
const div1     = document.getElementById('div').onclick = div;
const residuo1 = document.getElementById('residuo').onclick = residuo;

function suma(){
    const form = document.getElementById('form');
    const operando1 = form['operando1']
    const operando2 = form['operando2']
    const resultado = parseInt(operando1.value) + parseInt(operando2.value);
    document.getElementById('resultado').innerHTML = `Resultado de la suma: ${resultado}`;
}
function resta(){
    const form = document.getElementById('form');
    const operando1 = form['operando1']
    const operando2 = form['operando2']
    const resultado = parseInt(operando1.value) - parseInt(operando2.value);
    document.getElementById('resultado').innerHTML = `Resultado de la resta: ${resultado}`;
}
function multi(){
    const form = document.getElementById('form');
    const operando1 = form['operando1']
    const operando2 = form['operando2']
    const resultado = parseInt(operando1.value) * parseInt(operando2.value);
    document.getElementById('resultado').innerHTML = `Resultado de la multi: ${resultado}`;
}
function div(){
    const form = document.getElementById('form');
    const operando1 = form['operando1']
    const operando2 = form['operando2']
    const resultado = parseInt(operando1.value) / parseInt(operando2.value);
    document.getElementById('resultado').innerHTML = `Resultado de la div: ${resultado}`;
}
function residuo(){
    const form = document.getElementById('form');
    const operando1 = form['operando1']
    const operando2 = form['operando2']
    const resultado = parseInt(operando1.value) % parseInt(operando2.value);
    document.getElementById('resultado').innerHTML = `Resultado del residuo : ${resultado}`;
}
