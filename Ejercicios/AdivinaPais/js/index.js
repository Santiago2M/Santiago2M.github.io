
const paises = [
  { nombre: 'España', bandera: 'https://flagcdn.com/es.svg' },
  { nombre: 'Francia', bandera: 'https://flagcdn.com/fr.svg' },
  { nombre: 'Brasil', bandera: 'https://flagcdn.com/br.svg' },
  { nombre: 'Japón', bandera: 'https://flagcdn.com/jp.svg' },
  { nombre: 'México', bandera: 'https://flagcdn.com/mx.svg' },
  { nombre: 'Argentina', bandera: 'https://flagcdn.com/ar.svg' },
  { nombre: 'Alemania', bandera: 'https://flagcdn.com/de.svg' },
  { nombre: 'Italia', bandera: 'https://flagcdn.com/it.svg' },
  { nombre: 'Estados Unidos', bandera: 'https://flagcdn.com/us.svg' },
  { nombre: 'Canadá', bandera: 'https://flagcdn.com/ca.svg' },
  { nombre: 'China', bandera: 'https://flagcdn.com/cn.svg' },
  { nombre: 'Rusia', bandera: 'https://flagcdn.com/ru.svg' },
  { nombre: 'India', bandera: 'https://flagcdn.com/in.svg' },
  { nombre: 'Australia', bandera: 'https://flagcdn.com/au.svg' },
  { nombre: 'Sudáfrica', bandera: 'https://flagcdn.com/za.svg' }
];

let paisActual = {};
let opciones = [];
let intentos = 3;
let ronda = 0;

function nuevaBandera() {
  ronda++;
  intentos = 3;
  paisActual = paises[Math.floor(Math.random() * paises.length)];
  document.getElementById('bandera').src = paisActual.bandera;
  document.getElementById('mensaje').textContent = '';
  document.getElementById('intentos').textContent = `Intentos restantes: ${intentos}`;
  document.getElementById('siguienteBtn').style.display = 'none';
  generarOpciones();
}

function generarOpciones() {
  // Tomar el país correcto y 3 incorrectos
  const opcionesSet = new Set();
  opcionesSet.add(paisActual.nombre);
  while (opcionesSet.size < 4) {
    const aleatorio = paises[Math.floor(Math.random() * paises.length)].nombre;
    opcionesSet.add(aleatorio);
  }
  opciones = Array.from(opcionesSet).sort(() => Math.random() - 0.5);
  mostrarOpciones();
}

function mostrarOpciones() {
  const contenedor = document.getElementById('opciones');
  contenedor.innerHTML = '';
  opciones.forEach(pais => {
    const btn = document.createElement('button');
    btn.textContent = pais;
    btn.className = 'opcion-btn';
    btn.onclick = () => comprobarRespuesta(pais);
    contenedor.appendChild(btn);
  });
}

window.onload = nuevaBandera;

function comprobarRespuesta(respuesta) {
  const nombrePais = paisActual.nombre;
  if (respuesta === nombrePais) {
    document.getElementById('mensaje').textContent = '¡Correcto!';
    document.getElementById('mensaje').style.color = '#27ae60';
    document.getElementById('siguienteBtn').style.display = 'inline-block';
    desactivarOpciones();
  } else {
    intentos--;
    if (intentos > 0) {
      document.getElementById('mensaje').textContent = 'Incorrecto, intenta de nuevo.';
      document.getElementById('mensaje').style.color = '#c0392b';
      document.getElementById('intentos').textContent = `Intentos restantes: ${intentos}`;
    } else {
      document.getElementById('mensaje').textContent = `Perdiste. Era: ${paisActual.nombre}`;
      document.getElementById('mensaje').style.color = '#c0392b';
      document.getElementById('siguienteBtn').style.display = 'inline-block';
      document.getElementById('intentos').textContent = '';
      desactivarOpciones();
    }
  }
}

function desactivarOpciones() {
  const contenedor = document.getElementById('opciones');
  Array.from(contenedor.children).forEach(btn => btn.disabled = true);
}

window.siguienteBandera = function() {
  nuevaBandera();
}
