import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoComponent } from '../../components/proyecto/proyecto';

@Component({
  selector: 'porfolio-root',
  templateUrl: './porfolio.html',
  styleUrls: ['./porfolio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProyectoComponent],
  standalone: true
})
export class PorfolioComponent {
  public readonly proyectosUrl = 'https://github.com/santiagomartinezortiz?tab=repositories';

  public readonly proyectos: Proyecto[] = [
    {
      nombre: 'Portfolio Web',
      descripcion: 'Mi portfolio profesional en Angular.',
      tecnologias: ['Angular', 'TypeScript', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&q=80', // Imagen temática de programación
      repoUrl: 'https://github.com/santiagomartinezortiz?tab=repositories'
    }
    // Puedes añadir más proyectos aquí
  ];
}
