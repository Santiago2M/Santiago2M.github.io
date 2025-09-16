const palabras = [
  'variable',
  'funcion',
  'clase',
  'objeto',
  'array',
  'bucle',
  'algoritmo',
  'frontend',
  'backend',
  'debug'
];
let palabraSecreta, palabraAdivinada, letrasUsadas, intentos;

function iniciarJuego() {
  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
  palabraAdivinada = Array(palabraSecreta.length).fill('_');
  letrasUsadas = [];
  intentos = 6;
  document.getElementById('letra').disabled = false;
  document.getElementById('probarBtn').disabled = false;
  document.getElementById('mensaje').textContent = '';
  document.getElementById('mensaje').className = '';
  document.getElementById('letra').value = '';
  document.getElementById('ahorcadoImg').src = 'img/ahorcado0.png';
  crearPanelLetras();
  actualizarPantalla();
}

function crearPanelLetras() {
  const panel = document.getElementById('panel-letras');
  panel.innerHTML = '';
  const abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  abecedario.split('').forEach(letra => {
    const btn = document.createElement('button');
    btn.textContent = letra;
    btn.className = 'letra-panel';
    btn.disabled = false;
    btn.onclick = () => jugarLetra(letra.toLowerCase());
    panel.appendChild(btn);
  });
}

function actualizarPanelLetras() {
  const panel = document.getElementById('panel-letras');
  Array.from(panel.children).forEach(btn => {
    if (letrasUsadas.includes(btn.textContent.toLowerCase())) {
      btn.disabled = true;
    }
  });
}

function actualizarPantalla() {
  document.getElementById('palabra').textContent = palabraAdivinada.join(' ');
  document.getElementById('letras-usadas').textContent = letrasUsadas.join(', ');
  document.getElementById('intentos').textContent = intentos;
  document.getElementById('ahorcadoImg').src = `img/ahorcado${6 - intentos}.png`;
  actualizarPanelLetras();
}

function jugarLetra(letra) {
  if (!letra || letra.length !== 1 || letrasUsadas.includes(letra)) return;
  letrasUsadas.push(letra);
  if (palabraSecreta.includes(letra)) {
    for (let i = 0; i < palabraSecreta.length; i++) {
      if (palabraSecreta[i] === letra) {
        palabraAdivinada[i] = letra;
      }
    }
    mostrarMensaje(`¡Bien! La letra "${letra.toUpperCase()}" está en la palabra.`, 'exito');
  } else {
    intentos--;
    mostrarMensaje(`La letra "${letra.toUpperCase()}" no está.`, 'error');
  }
  actualizarPantalla();
  comprobarFin();
}

function jugar() {
  const input = document.getElementById('letra');
  const letra = input.value.toLowerCase();
  input.value = '';
  jugarLetra(letra);
}

function comprobarFin() {
  if (!palabraAdivinada.includes('_')) {
    mostrarMensaje('🎉 ¡Ganaste! La palabra era: ' + palabraSecreta, 'victoria');
    desactivarJuego();
  } else if (intentos === 0) {
    mostrarMensaje(`💀 Perdiste. La palabra era: ${palabraSecreta}`, 'derrota');
    desactivarJuego();
  }
}

function mostrarMensaje(msg, tipo) {
  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = msg;
  mensaje.className = tipo;
}

function desactivarJuego() {
  document.getElementById('letra').disabled = true;
  document.getElementById('probarBtn').disabled = true;
  const panel = document.getElementById('panel-letras');
  Array.from(panel.children).forEach(btn => btn.disabled = true);
}

document.getElementById('probarBtn').onclick = jugar;
document.getElementById('reiniciarBtn').onclick = iniciarJuego;
document.getElementById('letra').addEventListener('keyup', function(e) {
  if (e.key === 'Enter') jugar();
});

iniciarJuego();
