const palabras = ["coche", "moto", "barco", "avion", "tren"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];

const letrasAdivinadas = [];
const letrasErroneas = [];
let errores = 0;
const maxErrores = 6;

const palabraDiv = document.getElementById("palabra");
const mensaje = document.getElementById("mensaje");
const erroresP = document.getElementById("errores");


for (let i = 0; i < palabra.length; i++) {
  letrasAdivinadas[i] = "_";
}

function mostrarPalabra() {
  var contenido = "";
  for (var i = 0; i < letrasAdivinadas.length; i++) {
    contenido += letrasAdivinadas[i] + " ";
  }
  document.getElementById("palabra").textContent = contenido.trim();
}

function letraUsada(letra) {
  for (let i = 0; i < letrasAdivinadas.length; i++) {
    if (letrasAdivinadas[i] === letra) return true;
  }
  for (let i = 0; i < letrasErroneas.length; i++) {
    if (letrasErroneas[i] === letra) return true;
  }
  return false;
}

function letraEnPalabra(letra) {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) return true;
  }
  return false;
}

function actualizarLetras(letra) {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      letrasAdivinadas[i] = letra;
    }
  }
}

function palabraCompleta() {
  for (let i = 0; i < letrasAdivinadas.length; i++) {
    if (letrasAdivinadas[i] === "_") return false;
  }
  return true;
}

function adivinarLetra() {
  const input = document.getElementById("letraInput");
  const letra = input.value.toLowerCase();
  input.value = "";

  if (letra.length !== 1 || letra < "a" || letra > "z") {
    alert("Introduce una letra válida.");
    return;
  }

  if (letraUsada(letra)) {
    alert("Ya usaste esa letra.");
    return;
  }

  if (letraEnPalabra(letra)) {
    actualizarLetras(letra);
  } else {
    letrasErroneas[letrasErroneas.length] = letra;
    errores++;
    erroresP.textContent = "Errores: " + errores;
  }

  mostrarPalabra();

  if (palabraCompleta()) {
    mensaje.textContent = "Has Ganado ";
    document.querySelector("button").disabled = true;
  } else if (errores >= maxErrores) {
    mensaje.textContent = 'Has perdido, La palabra era "' + palabra + '" ';
    document.querySelector("button").disabled = true;
  }
}