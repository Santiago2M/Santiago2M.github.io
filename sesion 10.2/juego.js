const palabras = ["ordenador", "pantalla","botella","mochila", "zapatillas"];
const marcador = [];
const palabraAleatoria = Math.floor(Math.random() * palabras.length ) + 1;
const palabraDividida = palabras[palabraAleatoria].split('');
const numeroLetras = palabraDividida.length;
const maximoFallos = 6;
const fallos = 0;
const acertar = false;

const span = document.createElement('span');
document.body.appendChild(span);

for(let i=0;i<numeroLetras;i++){
    span.innerText += '-';
    marcador[i] = '-';
}


addEventListener('keydown', (letraPulsada) => {
    if (fallos <= maximoFallos) {
        let letra = letraPulsada.key;
        for (let j = 0; j < numeroLetras; j++) {
            if (letra == palabraDividida[j]) {
                marcador[j] = letra;
                acertar = true;
            }
        }
        span.innerText = marcador.join('')
        if (!acertar) {
            fallos++;
        }
        else {
            alert('Has perdido');
        }
    }
});

