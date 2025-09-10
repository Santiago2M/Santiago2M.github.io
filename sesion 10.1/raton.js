const coorDiv = document.createElement('div');
coorDiv.id = 'coords';
coorDiv.textContent = 'Coordenadas: X-, Y-';

document.body.appendChild(coorDiv);

document.addEventListener('click', function(evento) {
    console.log("evento", evento);
    const x = evento.clientX;
    const y = evento.clientY;
    coorDiv.textContent = `Coordenadas: X- ${x}, Y- ${y}`;
});
