import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppSectionService {
  private readonly _seccionActual = signal<string>('sobremi');
  readonly seccionActual = computed(() => this._seccionActual());

  cambiarSeccion(seccion: string) {
    this._seccionActual.set(seccion);
  }
}


