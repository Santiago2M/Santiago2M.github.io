function CambioColor(){
    const inputRojo = document.getElementById("rojo");
    const valor1 = inputRojo.value;
    const numero1= Number(valor1);

    const inputVerde = document.getElementById("verde");
    const valor2 = inputVerde.value;
    const numero2 = Number(valor2);

    const inputAzul = document.getElementById("azul");
    const valor3 = inputAzul.value;
    const numero3 = Number(valor3);

      if (
        isNaN(valor1) || valor1 < 0 || valor1 > 255 ||
        isNaN(valor2) || valor2 < 0 || valor2 > 255 ||
        isNaN(valor3) || valor3 < 0 || valor3 > 255
    ) {
        alert("Pon números o número válidos, del 0-255");
        return;
    }
        document.body.style.backgroundColor = `rgb(${numero1}, ${numero2}, ${numero3})`;
    
}
    //Esto me sirve por si quiero hacer 3 botones

    //inputRojo.style.backgroundColor = "red";
    //inputVerde.style.backgroundColor = "green";
    //inputAzul.style.backgroundColor = "blue";