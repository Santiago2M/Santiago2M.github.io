const tabla = document.getElementById("tabla-ascii");

for(let i = 33; i < 255; i++) {  
    const fila = document.createElement("tr");

    const caracter = (i >= 32 && i === 127) ? "Control" : String.fromCharCode(i);

    fila.innerHTML = `
    <td>${i}</td><td>${caracter}</td>
    <td>${i.toString(16).toUpperCase()}</td>`;

    tabla.appendChild(fila);
}

