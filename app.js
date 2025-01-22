// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const max = 10;

let amigos = [];

let nombre;

let i = 0;

//console.log(nombre);

function agregarAmigo() {
  nombre = document.getElementById("amigo").value;
  console.log(nombre);
  if (nombre === "" || !isNaN(nombre)) alert("No se ha ingresado un nombre!");
  else {
    //while (i <= max) {
      amigos.push(nombre);
      console.log(amigos);
    //}
  }
}
