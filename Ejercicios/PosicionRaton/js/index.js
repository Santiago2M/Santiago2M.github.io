// document.addEventListener ('click', function(event){
//     const x = event.clientX;
//     const y = event.clientY;
//   console.log('Posición del clic: X = ' + x + ', Y = ' + y);
// });
const coordenadas = document.getElementById("coordenadas")
document.onclick = function(event){
    const x = event.clientX;
    const y = event.clientY;
    console.log('Posición del clic: X = ' + x + ', Y = ' + y);
    coordenadas.textContent = 'Posición del clic: X = ' + x + ', Y = ' + y;
    coordenadas.classList.add('active');
    setTimeout(() => coordenadas.classList.remove('active'), 800);
}

//Las dos maneras son lo mismo

