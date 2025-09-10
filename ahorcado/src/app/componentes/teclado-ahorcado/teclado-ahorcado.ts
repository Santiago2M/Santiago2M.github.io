import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-teclado-ahorcado',
  standalone: true,
  imports: [],
  templateUrl: './teclado-ahorcado.html',
  styleUrls: ['./teclado-ahorcado.css']
})
export class Teclado {
  public juegoTerminado: InputSignal<boolean> = input(false);
  public letraPulsada : OutputEmitterRef<string> = output<string>();
  constructor() {
    // Escuchamos los eventos de teclado a nivel de ventana
    addEventListener('keydown', (event) => {
      if (this.juegoTerminado()) return;
      // Comprobamos que la tecla pulsada es una letra (a-z o A-Z) (ñ no incluida)
      if (/^[a-zA-Z]$/.test(event.key)) {
        // Emitimos la letra pulsada en mayúscula al componente padre
        this.letraPulsada.emit(event.key.toUpperCase());
      }
    });
   }
}

