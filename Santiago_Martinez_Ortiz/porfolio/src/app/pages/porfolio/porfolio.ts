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
  public readonly proyectos: Proyecto[] = [
    {
      nombre: 'Adivina País',
      descripcion: 'Adivina el país a partir de pistas visuales y textuales. Ideal para practicar geografía.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=600&q=80', // Mapa y banderas
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/AdivinaPais'
    },
    {
      nombre: 'Ahorcado',
      descripcion: 'El clásico juego de adivinar palabras, con interfaz sencilla y lógica de intentos.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=600&q=80', // Letras y palabras
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/Ahorcado'
    },
    {
      nombre: 'Ahorcado Angular',
      descripcion: 'Versión Angular del clásico juego del ahorcado, con componentes y servicios.',
      tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?fit=crop&w=600&q=80', // Angular logo y letras
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/AhorcadoAngular'
    },
    {
      nombre: 'ToDo Tareas Angular',
      descripcion: 'Gestor de tareas hecho en Angular, usando componentes y servicios para CRUD.',
      tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&q=80', // Lista de tareas
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/ToDoTareasAngular'
    },
    {
      nombre: 'Calculadora',
      descripcion: 'Calculadora básica para operaciones matemáticas simples. Práctica de eventos y DOM.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=600&q=80', // Calculadora
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/Calculadora'
    },
    {
      nombre: 'Cambio de colores',
      descripcion: 'Aplicación interactiva para cambiar colores de fondo y elementos en la página.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=600&q=80', // Paleta de colores
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/Cambio%20de%20colores'
    },
    {
      nombre: 'Cronómetro',
      descripcion: 'Cronómetro digital con controles de inicio, pausa y reinicio. Ejemplo de manejo de tiempo.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f9?fit=crop&w=600&q=80', // Reloj/cronómetro
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/Cronometro'
    },
    {
      nombre: 'Posición del Ratón',
      descripcion: 'Muestra en tiempo real la posición del ratón en la pantalla. Útil para eventos.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=600&q=80', // Cursor/ratón
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/PosicionRaton'
    },
    {
      nombre: 'Editar Persona',
      descripcion: 'Formulario para editar los datos de una persona. Práctica de formularios y validación.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=600&q=80', // Formulario/persona
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Ejercicios/editar%20persona'
    },
  ];

  public readonly proyectosAngular: Proyecto[] = this.proyectos.filter(p => p.tecnologias.includes('Angular'));
  public readonly proyectosOtros: Proyecto[] = this.proyectos.filter(p => !p.tecnologias.includes('Angular'));
}
