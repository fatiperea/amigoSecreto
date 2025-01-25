// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let totalAmigos;

let amigos = [];

let nombre;

let i = 0;

let sorteoListo = false;

//document.getElementById("btnReiniciar").setAttribute("disabled", "true");

//Se establece esta funcion para evitar una lista indefinida,
// entendiendo que para el sorteo debe haber como minimo 2 amigos
function cantidadAmigos() {
  let numero = parseInt(prompt("Agregue cantidad de amigos (mayor a uno): "));
  if (numero > 1) {
    totalAmigos = numero;
    document.getElementById("btnAgregar").removeAttribute("disabled");
  } else {
    alert("No se puede jugar con menos de 2 amigos");
    document.getElementById("btnAgregar").setAttribute("disabled", "true");
    cantidadAmigos();
  }
}

cantidadAmigos();

function agregarAmigo() {
  nombre = document.getElementById("amigo").value.toUpperCase();

  if (nombre === "" || !isNaN(nombre)) {
    alert("Por favor inserte un nombre");
    document.getElementById("amigo").value = "";
  } else {
    if (amigos.length < totalAmigos) {
      amigos.push(nombre);
      document.getElementById("btnSortear").removeAttribute("disabled");
    } else {
      alert("Ya se ha completado la lista de amigos");
      document.getElementById("btnAgregar").setAttribute("disabled", "true");
    }
    document.getElementById("amigo").value = "";

    mostrarAmigos();
  }
  document.getElementById("amigo").focus();
}

//No se controla si la lista esta vacia porque ya se hizo el control desde el principio
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li><b>${amigos[i]}</li><br>`;
  }
}

function sortearAmigo() {
  //let sorteoListo;
  if (amigos.includes(undefined)) {
    document.getElementById("btnSortear").setAttribute("disabled", "true");
    document.getElementById("btnReiniciar").setAttribute("disabled", "true");
    alert("La lista está incompleta!");
    
    //document.getElementById("btnSortear").removeAttribute("disabled");
  } else {
    let indice = Math.floor(Math.random() * amigos.length);

    let sorteado = document.getElementById("resultado");

    sorteado.innerHTML = `<li><b>Amigo secreto: ${amigos[indice]}</li><br>`;

    

    sorteoListo = true;
    //sorteoListo = false
  }document.getElementById("btnReiniciar").removeAttribute("disabled");
  //return sorteoListo;
}

//Se agrega funcion para reiniciar el juego
function reiniciar() {
  //console.log(sortearAmigo());
  //if (sortearAmigo()) {
    //document.getElementById("btnReiniciar").removeAttribute("disabled");
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("btnSortear").setAttribute("disabled", "true");

    amigos.length = 0;

    cantidadAmigos();
  //} else {
    //alert("No realizo el sorteo!");
    //document.getElementById("btnReiniciar").setAttribute("disabled", "true");
  //}
}
