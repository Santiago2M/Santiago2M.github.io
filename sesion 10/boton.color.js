const rInput = document.getElementById("r");
const gInput = document.getElementById("g");
const bInput = document.getElementById("b");    


 function pulsado(){
    console.log("boton pulsado");
    const r = rInput.value;
    const g = gInput.value;
    const b = bInput.value; 
    document.body.style.background = `rgb(${r}, ${g},${b})`;
 }