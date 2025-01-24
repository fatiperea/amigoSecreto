// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const totalAmigos = 5;

let amigos = [];

let nombre;

let i = 0;

function agregarAmigo() {
  nombre = document.getElementById("amigo").value.toUpperCase();

  if (nombre === "" || !isNaN(nombre)) {
    alert("Por favor inserte un nombre");
    document.getElementById("amigo").value = "";
  } else {
    if (amigos.length < totalAmigos) {
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

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li><b>${amigos[i]}</li><br>`;
  }
}

/*function mostrarSorteado(indice)
{
  let sorteado=document.getElementById('resultado');

  sorteado.innerHTML = `<li><b>${amigos[indice]}</li><br>`;

  sorteado.setAttribute('title','Sorteado: ')

}*/

function sortearAmigo() {
  
  if (amigos.length > 0) {
    let indice = Math.floor(Math.random() * totalAmigos) + 1;

    console.log(indice)

    let sorteado = document.getElementById("resultado");

    sorteado.innerHTML = `<li><b>${amigos[indice]}</li><br>`;

    //sorteado.setAttribute("title", "Sorteado: ");

  }else alert('La lista está vacía!');
}
