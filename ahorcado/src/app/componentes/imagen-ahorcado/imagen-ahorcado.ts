import { Component, computed, input, InputSignal, Signal } from '@angular/core';

@Component({
  selector: 'app-imagen-ahorcado',
  standalone: true,
  imports: [],
  templateUrl: './imagen-ahorcado.html',
  styleUrls: ['./imagen-ahorcado.css']
})
export class ImagenAhorcado {
  // Recibimos el número de intentos que tenemos desde el componente padre
  public fallos: InputSignal<number> = input.required<number>();
  // Computamos la URL de la imagen en función del número de intentos restantes
  public urlImagen: Signal<string> = computed(() => {
    const fallos = this.fallos();
    const pasos = Math.max(0, Math.min(6, fallos));
    return 'assets/imagenes/ahorcado' + pasos + '.png';
  });

}