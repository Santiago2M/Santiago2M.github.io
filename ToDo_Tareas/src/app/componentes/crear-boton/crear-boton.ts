import { Component, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../../interfaces/interfazTarea';
import { Estado } from '../../../enum/estadosEnum';

@Component({
  selector: 'app-crear-boton',
  imports: [FormsModule],
  templateUrl: './crear-boton.html',
  styleUrl: './crear-boton.css'
})
export class CrearBoton {
  
  public tareaCreada: OutputEmitterRef<Tarea> = output<Tarea>();
  public titulo: WritableSignal<string> = signal('');
  public nuevaTarea(): void {
    this.tareaCreada.emit({
      id: Date.now(),
      completada: false,
      fechaInicio: new Date(),
      fechaFin: null,
      descripcion: this.titulo(),
      estado: Estado.SinIniciar,
      titulo:this.titulo(),
    });
  }
}
