const mostrarReloj = () => {
  // se crea un nuevo obj tipo date
  const hora = new Date();
  //   se llama a la hora, minuto y segundos con el nombre de la constante
  //   se engloba la funcion que se uso para corregir el error
  let hr = fechaHora(hora.getHours());
  let min = fechaHora(hora.getMinutes());
  let seg = fechaHora(hora.getSeconds());
  //   se usa un div para almacenar la hr. Se usa `` para llamar a las variables con los valores de hora minuto y segundo
  document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

  //   hacer los meses y dias del año
  const meses = ["Ene", "Feb", "mar", "abr", "may"];
  const dias = ["Dom", "Lun", "Mar", "Mir", "Jue", "Vir", "Sab"];
  //   se crea variable que almacenen el dia, dias y mes en variable array
  let diaSemana = dias[hora.getDay()]; // se usa getDay para el dia
  let dia = hora.getDate(); // se usa getDate para el numero del dia
  let mes = meses[hora.getMonth()]; // se usa getMonth para el mes
  let fechaCompleta = `${diaSemana}, ${dia} de ${mes}`; // se crea un variable que una cada valor de las variables
  document.getElementById("fecha").innerHTML = fechaCompleta; // se usa un id para almacenar la variable de arriba
  document.getElementById("contenedor").classList.toggle("animar");
};
document.getElementById("mostrarRelojAlInicio").onload = mostrarReloj; // se carga la funcion al cargar la pagina

// se crea un funcion para areglar un problema con la hora
// se pasa como parametro cualquier cosa
function fechaHora(horaP) {
  // se pregunta si horaP es menor a 10
  if (horaP < 10)
    // si es menor se le concatena un 0
    horaP = "0" + horaP;
  // se retorna parametro y se llava a la funcion de hora
  return horaP;
}

setInterval(mostrarReloj, 1000);