import { Component, signal, WritableSignal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionTarea } from "./componentes/gestion-tarea/gestion-tarea";
import { Estado } from '../enum/estadosEnum';
import { Tarea } from '../interfaces/interfazTarea';
import { CrearBoton } from "./componentes/crear-boton/crear-boton";

@Component({
  selector: 'app-root',
  imports: [GestionTarea, CrearBoton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public tareas: WritableSignal<Tarea[]> = signal(this.cargarTareasDesdeLocalStorage())

  constructor() {
    effect(() => {
      this.guardarTareasEnLocalStorage(this.tareas());
    });
  }

  public tareasOrdenadas(): Tarea[] {
    return this.tareas().sort((a, b) => {
      // Ordenar por fecha de inicio (más reciente primero)
      return new Date(b.fechaInicio).getTime() - new Date(a.fechaInicio).getTime();
    });
  }

  public guardarTarea(tarea: Tarea): void {
    this.tareas.update(tareas => [...tareas, tarea]);
  }

  public eliminarTarea(id: number): void {
    this.tareas.set(this.tareas().filter(t => t.id != id));
  }

  public editarTarea(tarea: Tarea) {
    let tareaModifica: Tarea | undefined = this.tareas().find(t => t.id == tarea.id);
    if (tareaModifica) {
      this.eliminarTarea(tarea.id);
      this.tareas.update(tareas => [...tareas, tarea]);
    }
  }

  private cargarTareasDesdeLocalStorage(): Tarea[] {
    try {
      const tareasGuardadas = localStorage.getItem('tareas');
      if (tareasGuardadas) {
        const tareas = JSON.parse(tareasGuardadas);
        // Convertir strings de fecha de vuelta a objetos Date
        return tareas.map((tarea: any) => ({
          ...tarea,
          fechaInicio: new Date(tarea.fechaInicio),
          fechaFin: tarea.fechaFin ? new Date(tarea.fechaFin) : null
        }));
      }
    } catch (error) {
      console.error('Error al cargar tareas desde localStorage:', error);
    }
    return [];
  }

  protected guardarTareasEnLocalStorage(tareas: Tarea[]): void {
    try {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    } catch (error) {
      console.error('Error al guardar tareas en localStorage:', error);
    }
  }
}
