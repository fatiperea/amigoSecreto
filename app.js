// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let totalAmigos;
let minimo = 2;
let amigos = [];
let nombre;
let i = 0;

//Se establece esta funcion para evitar una lista indefinida,
// entendiendo que para un sorteo debe haber como minimo 2 amigos
function cantidadAmigos() {
  let numero = parseInt(prompt("Agregue cantidad de amigos (2 o mas): "));
  if (numero >= minimo) {
    totalAmigos = numero;
    document.getElementById("btnAgregar").removeAttribute("disabled");
  } else {
    alert("No se puede jugar con menos de 2 amigos");
    document.getElementById("btnAgregar").setAttribute("disabled", "true");
    cantidadAmigos();
  }
}

cantidadAmigos();

function nombreValido(nombre) {
  let esValido;
  if (nombre === "" || !isNaN(nombre) || nombre.length < 3) {
    console.log("nombre no valido");
    alert("Por favor inserte un nombre válido");
    //document.getElementById("btnAgregar").setAttribute("disabled", "true");
    document.getElementById("amigo").value = "";
    esValido = false;
  } else {
    console.log("nombre valido");
    esValido = true;
  }
  return esValido;
}

function agregarAmigo() {
  nombre =
    document.getElementById("amigo").value.charAt(0).toUpperCase() +
    document.getElementById("amigo").value.slice(1);

  if (nombreValido(`${nombre}`)) {
    console.log("nombre valido", nombre);
    //nombre=document.getElementById("amigo").value;
    console.log(amigos.length);
    if (amigos.length < totalAmigos) {
      amigos.push(nombre);
      console.log(amigos);
      console.log(totalAmigos);
      mostrarAmigos();

      document.getElementById("btnAgregar").removeAttribute("disabled");
      document.getElementById("btnSortear").setAttribute("disabled", "true");
    }

    if (amigos.length == totalAmigos) {
      document.getElementById("btnSortear").removeAttribute("disabled");
      document.getElementById("btnAgregar").setAttribute("disabled", "true");
      document.getElementById("amigo").value = "";
    }
  }
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}

//No se controla si la lista esta vacia porque ya se hizo el control desde el principio
//Sino se usaria amigos.length > 0
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li><b>${amigos[i]}</li><br>`;
  }
}

function sortearAmigo() {
  console.log("a sortear");

  document.getElementById("btnAgregar").setAttribute("disabled", "true");
  let indice = Math.floor(Math.random() * amigos.length);

  let sorteado = document.getElementById("resultado");

  sorteado.innerHTML = `<li><b>Amigo secreto: ${amigos[indice]}</li><br>`;
  //sorteoListo = true;

  document.getElementById("btnSortear").setAttribute("disabled", "true");
  document.getElementById("btnReiniciar").dataset.sorteoRealizado = "true";
  document.getElementById("btnReiniciar").removeAttribute("disabled");
}

//Se agrega funcion para reiniciar el juego
function reiniciar() {
  let reiniciar = document.getElementById("btnReiniciar");
  console.log("reinicia");
  if (reiniciar.dataset.sorteoRealizado) {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    cantidadAmigos();

    amigos.length = 0;
    reiniciar.setAttribute("disabled", "true");
  }
}
