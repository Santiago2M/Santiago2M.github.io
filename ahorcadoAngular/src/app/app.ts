import { Component, signal, WritableSignal } from '@angular/core';
import { TextoAhorcado } from "./texto-ahorcado/texto-ahorcado";
import { EstadoTextoAhorcado } from './texto-ahorcado/estado-texto-ahorcado.interface';

@Component({
  selector: 'app-root',
  imports: [TextoAhorcado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ahorcadoAngular');

  // Señal para enviar la letra
  public letraSignal : WritableSignal<string> = signal<string>('');

  // Método para actualizar la letra
  enviarLetra(letra: string) {
    this.letraSignal.set(letra);
  }

  estadoCambiado(estado: EstadoTextoAhorcado){
    console.log(estado);
  }

  

}
