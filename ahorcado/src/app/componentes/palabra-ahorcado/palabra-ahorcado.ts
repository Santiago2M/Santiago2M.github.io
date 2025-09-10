import { Component, computed, effect, input, InputSignal, Signal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-palabra-ahorcado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './palabra-ahorcado.html',
  styleUrls: ['./palabra-ahorcado.css']
})
export class TextoAhorcado {
  // Recibimos la palabra secreta desde el componente padre
  public palabraSecreta: InputSignal<string> = input.required<string>();
  public letraPulsada: InputSignal<string> = input.required<string>();
  // Señal para almacenar las letras ya intentadas
  public letrasIntentadas: WritableSignal<string[]> = signal([]);
  // Señal computada con la palabra mostrada (guiones y letras adivinadas)
  public palabraMostrada: Signal<string> = computed(() => {
    const palabra = this.palabraSecreta();
    const intentadas = this.letrasIntentadas();
    return palabra
      .split('')
      .map((letra) => (intentadas.includes(letra) ? letra : '_'))
      .join(' ');
  });

  // Señal computada que indica si la palabra está completada
  public completada: Signal<boolean> = computed(() => {
    const palabra = this.palabraSecreta();
    if (!palabra) return false;
    const letrasUnicas = Array.from(new Set(palabra.split('')));
    const intentadas = this.letrasIntentadas();
    return letrasUnicas.every((letra) => intentadas.includes(letra));
  });

  // Evento para notificar que se ha completado la palabra
  public palabraCompletada: OutputEmitterRef<void> = output<void>();

  constructor() {
    // Efecto para actualizar las letras intentadas cuando se pulsa una letra nueva
    effect(() => {
      // Si se ha pulsado una letra y no está ya en el array, la añadimos
      const letra = this.letraPulsada();
      const actuales = this.letrasIntentadas();
      if (letra && !actuales.includes(letra)) {
        this.letrasIntentadas.set([...actuales, letra]);
      }
    });

    // Efecto para reiniciar letras intentadas cuando cambia la palabra secreta
    effect(() => {
      const palabra = this.palabraSecreta();
      void palabra; // Accedemos para que el efecto reaccione a cambios
      this.letrasIntentadas.set([]);
    });

    // Efecto para emitir el evento cuando se completa la palabra
    effect(() => {
      if (this.completada()) {
        this.palabraCompletada.emit();
      }
    });
  }
}