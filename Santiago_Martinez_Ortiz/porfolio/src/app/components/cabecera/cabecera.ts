import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AppSectionService } from '../../services/app-section.service';

@Component({
  selector: 'cabecera-root',
  standalone: true,
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  host: {
    'class': 'cabecera-fixed'
  }
})
export class CabeceraComponent {
  protected readonly secciones = [
    { nombre: 'Sobre mí', id: 'sobremi' },
    { nombre: 'Formación y Experiencia', id: 'formacionyexperiencia' },
    { nombre: 'Porfolio', id: 'porfolio' }
  ];
  constructor(public sectionService: AppSectionService) {}

  seleccionarSeccion(id: string) {
    this.sectionService.cambiarSeccion(id);
  }

  getSeleccionada(): string {
    return this.sectionService.seccionActual();
  }
}
