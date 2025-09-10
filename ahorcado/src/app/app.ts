import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { ImagenAhorcado } from "./componentes/imagen-ahorcado/imagen-ahorcado";
import { TextoAhorcado } from "./componentes/palabra-ahorcado/palabra-ahorcado";
import { Teclado } from "./componentes/teclado-ahorcado/teclado-ahorcado";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImagenAhorcado, TextoAhorcado, Teclado],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ahorcado');
  // Número máximo de errores permitidos
  private _numeroMaximoErrores: number = 6;
  // Oportunidades restantes (inicialmente igual al número máximo de errores)
  public oportunidades: WritableSignal<number> = signal(this._numeroMaximoErrores);
  // Array de palabras para el juego
  public palabrasAhorcado: string[] = ['ANGULAR', 'JAVASCRIPT', 'HTML', 'CSS', 'TYPESCRIPT', 'DESARROLLO', 'FRONTEND', 'BACKEND', 'FULLSTACK', 'PROGRAMACION'];
  // Seleccionamos una palabra secreta aleatoria del array
  public palabraSecreta: WritableSignal<string> = signal(this.palabrasAhorcado[Math.floor(Math.random() * this.palabrasAhorcado.length)]);
  // Letra pulsada en el teclado
  public letraTeclado: WritableSignal<string> = signal('');
  // Número de fallos cometidos = máximo - oportunidades restantes
  public fallos = computed(() => this._numeroMaximoErrores - this.oportunidades());
  public juegoTerminado: WritableSignal<boolean> = signal(false);

  public reiniciar(): void {
    this.palabraSecreta.set(this.palabrasAhorcado[Math.floor(Math.random() * this.palabrasAhorcado.length)]);
    this.oportunidades.set(this._numeroMaximoErrores);
    this.letraTeclado.set('');
    this.juegoTerminado.set(false);
  }
  // Comprobamos si la letra pulsada no está en la palabra secreta para restar una oportunidad
  public comprobarOportunidades(letra: string): void {
    // Si la letra no está en la palabra secreta
    if (!this.palabraSecreta().includes(letra)) {
      // Restamos una oportunidad, pero no bajamos de 0
      this.oportunidades.update(value => value > 0 ? value - 1 : 0);
    }
  }
  // Enviamos la letra pulsada desde el componente padre al componente texto-ahorcado y
  // en caso de fallar enviamos las oportunidades restantes.
  public enviarLetra(letra: string): void {
    this.comprobarOportunidades(letra);
    this.letraTeclado.set(letra);
    if (this.oportunidades() === 0) {
      this.juegoTerminado.set(true);
    }
  }

  public onPalabraCompletada(): void {
    this.juegoTerminado.set(true);
  }
}