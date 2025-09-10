//declaramos una variable para la ruta de las imagenes
let rutaImagenes = "./img/"; //Con respecto al fichero donde se muestra
//declaramos una variable para el array de los nombres de la imagens
let nombreImagenes = [
    "Amanecer en el rio.jpg",
    "Atardecer en el lago.jpg",
    "Atardecer en las montañas.jpg",
    "Lago en las montañas.jpg",
    "Montañas nevadas.jcn.jpg"
];
function quitarExtension(nombreImagen){
    //quita la extensión 
    let ultimoPunto = nombreImagen.lastIndexOf(".");
    return nombreImagen.substring(0,ultimoPunto);
}
//variable que lleva la cuenta
let indice = 1;
//generar un timmer para que cambien las imagenes setInterval
setInterval(function () {
     //Lo que este aqui dentro se ejecuta cada 2 segundos
     let img = document.getElementById('imagenSlider');
     let textoimg = document.getElementById('textoImagen');
    img.src = rutaImagenes+nombreImagenes[indice];
    img.alt = quitarExtension(nombreImagenes[indice]);
    textoimg.innerHTML = quitarExtension(nombreImagenes[indice]);
    indice++;
    if (indice >= nombreImagenes.length){
        indice = 0;
    }
}, 2000);