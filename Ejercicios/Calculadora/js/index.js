

function obtenerValores() {
    const numero1 = Number(document.getElementById("n1").value);
    const numero2 = Number(document.getElementById("n2").value);
    return { numero1, numero2 };
}

function mostrarResultado(valor, esError = false) {
    const resultado = document.getElementById("resultado");
    resultado.value = valor;
    resultado.style.color = esError ? '#c0392b' : '#27ae60';
}

function mostrarOperador(op) {
    document.getElementById("operador").textContent = op;
}

window.Sumar = function() {
    mostrarOperador('+');
    const { numero1, numero2 } = obtenerValores();
    if (!isNaN(numero1) && !isNaN(numero2)) {
        mostrarResultado(numero1 + numero2);
    } else {
        mostrarResultado("Error", true);
    }
}

window.Restar = function() {
    mostrarOperador('-');
    const { numero1, numero2 } = obtenerValores();
    if (!isNaN(numero1) && !isNaN(numero2)) {
        mostrarResultado(numero1 - numero2);
    } else {
        mostrarResultado("Error", true);
    }
}

window.Multiplicar = function() {
    mostrarOperador('×');
    const { numero1, numero2 } = obtenerValores();
    if (!isNaN(numero1) && !isNaN(numero2)) {
        mostrarResultado(numero1 * numero2);
    } else {
        mostrarResultado("Error", true);
    }
}

window.Dividir = function() {
    mostrarOperador('÷');
    const { numero1, numero2 } = obtenerValores();
    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero2 === 0) {
            mostrarResultado("Error", true);
        } else {
            mostrarResultado((numero1 / numero2).toFixed(4));
        }
    } else {
        mostrarResultado("Error", true);
    }
}

window.Limpiar = function() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").value = "";
    mostrarOperador('?');
}



