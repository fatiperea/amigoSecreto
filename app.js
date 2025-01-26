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
  let numero = parseInt(prompt("Agregue cantidad de amigos (2 o más): "));
  if (numero >= minimo) {
    totalAmigos = numero;
    document.getElementById("btnAgregar").removeAttribute("disabled");
  } else {
    alert("No se puede jugar con menos de 2 amigos");
    document.getElementById("btnAgregar").setAttribute("disabled", "true");
    cantidadAmigos();
  }

  let subtitulo = document.getElementById("subtitulo");
  subtitulo.innerHTML = `<h2>Digite el nombre de sus amigos (total de amigos: ${totalAmigos})  </h2>`;
}

cantidadAmigos();

function nombreValido(nombre) {
  let esValido;
  if (nombre === "" || !isNaN(nombre) || nombre.length < 3) {
    alert("Por favor inserte un nombre válido");

    document.getElementById("amigo").value = "";
    esValido = false;
  } else {
    esValido = true;
  }
  return esValido;
}

function agregarAmigo() {
  nombre =
    document.getElementById("amigo").value.charAt(0).toUpperCase() +
    document.getElementById("amigo").value.slice(1);

  if (nombreValido(`${nombre}`)) {
    if (amigos.length < totalAmigos) {
      if (amigos.includes(nombre)) {
        alert("No se pueden repetir amigos");
        document.getElementById("amigo").value = "";
      } else amigos.push(nombre);

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
  lista.innerHTML += "<li>";
  for (i = 0; i < amigos.length; i++) {
    lista.innerText += ` ${amigos[i]} -`;
  }
  lista.innerHTML += "</li>";
}

function sortearAmigo() {
  document.getElementById("btnAgregar").setAttribute("disabled", "true");
  let indice = Math.floor(Math.random() * amigos.length);

  let sorteado = document.getElementById("resultado");

  sorteado.innerHTML = `<li><b>Amigo secreto: ${amigos[indice]}</li><br>`;

  document.getElementById("btnSortear").setAttribute("disabled", "true");
  document.getElementById("btnReiniciar").dataset.sorteoRealizado = "true";
  document.getElementById("btnReiniciar").removeAttribute("disabled");
}

//Se agrega funcion para reiniciar el juego
function reiniciar() {
  let reiniciar = document.getElementById("btnReiniciar");

  if (reiniciar.dataset.sorteoRealizado) {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    cantidadAmigos();

    amigos.length = 0;
    reiniciar.setAttribute("disabled", "true");
  } else alert("No finalizó el sorteo");
}
