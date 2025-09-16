let midatos = [];
let indice = 0;
let aleatorios = [];

let respuesta = fetch("https://restcountries.com/v3.1/all?fields=name,flags,translations")
  .then(response => response.json())
  .then(datos => {
    midatos = datos;
  })
  .catch(ex => console.log(ex));

// Esperar a que los datos estén listos
respuesta.then(() => {
  aleatorios = mezclar([...midatos]);
  mostrar();
});

// Mezclar array
function mezclar(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Mostrar 10 banderas
function mostrar() {
  const cont = document.getElementById('banderas');
  cont.innerHTML = '';
  let grupo = aleatorios.slice(indice, indice + 10);

  grupo.forEach(pais => {
    cont.innerHTML += `
      <div class="bandera">
        <img src="${pais.flags.svg}" alt="Bandera">
        <p>${pais.translations?.spa?.common || pais.name.common}</p>
      </div>`;
  });

  indice += 10;
  if (indice >= aleatorios.length) {
    indice = 0;
    aleatorios = mezclar([...midatos]);
  }
}

// Botón para mostrar más
document.getElementById('siguiente').addEventListener('click', () => {
  // Esperar a que se cargue la API antes de mostrar más
  if (midatos.length > 0) {
    mostrar();
  }
});


