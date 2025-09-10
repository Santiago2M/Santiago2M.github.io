import { Component, input, InputSignal, output, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../../interfaces/interfazTarea';
import { Estado } from '../../../enum/estadosEnum';

@Component({
  selector: 'app-gestion-tarea',
  imports: [FormsModule, DatePipe, CommonModule],
  templateUrl: './gestion-tarea.html',
  styleUrl: './gestion-tarea.css'
})
export class GestionTarea {
actualizarEstado($event: any) {
throw new Error('Method not implemented.');
}
actualizarDescripcion($event: any) {
throw new Error('Method not implemented.');
}
t: any;
actualizarFechaFin($event: any) {
throw new Error('Method not implemented.');
}
  public tarea: InputSignal<Tarea> = input.required<Tarea>();
  public editar = output<Tarea>();
  public eliminar = output<number>();
  public estados : string[] = Object.values(Estado);
  public editandoTitulo = signal(false);
  public nuevoTitulo = signal('');

  public editarTarea(): void {
    if (!this.editandoTitulo()) {
      this.nuevoTitulo.set(this.tarea().titulo);
      this.editandoTitulo.set(true);
    } else {
      this.tarea().titulo = this.nuevoTitulo();
      this.editar.emit(this.tarea());
      this.editandoTitulo.set(false);
    }
  }

  public cancelarEdicion(): void {
    this.editandoTitulo.set(false);
  }

  public eliminarTarea(): void {
    this.eliminar.emit(this.tarea().id);
  }
}
