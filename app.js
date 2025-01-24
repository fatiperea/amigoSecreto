// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const max = 5;

let amigos = [];

let nombre;

let i = 0;


function agregarAmigo() {
  nombre = document.getElementById("amigo").value;

  if (nombre === "" || !isNaN(nombre)) alert("Por favor inserte un nombre");
  else {
    if (amigos.length < max) {
      amigos.push(nombre);
     

    } else {
      alert("Ya se ha completado la lista de amigos");
      document.getElementById("btnAgregar").setAttribute("disabled", "true");
    }
    document.getElementById("amigo").value = "";

    console.log(amigos);
    mostrarAmigos();
  }
}



function mostrarAmigos(){

  for(i=0;i<amigos.length;i++)
  {
    document.getElementById('listaAmigos').innerHTML= `<li>${amigos[i]}</li><br>`;

  }

}

function sortearAmigo() {
  if (amigos.length > 0) return Math.floor(Math.random() * amigos.length) + 1;
}

/*} else {
  document.getElementById("btnAgregar").disabled=true;
  alert("Ya se ha completado la lista de amigos");
} */

//document.getElementById("btnAgregar").setAttribute("disables", "true");
//alert("Ya se ha completado la lista de amigos");

/*if (amigos.length > 0 && amigos.length <= 5) {
  alert("Ya se ha completado la lista de amigos");
  document.getElementById("btnAgregar").setAttribute("disabled", "true");
}*/
