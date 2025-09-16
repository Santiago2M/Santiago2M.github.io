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
      nombre: 'Banderas 1',
      descripcion: 'Proyecto de mejoras sobre banderas. Ejercicio práctico.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Banderas%201'
    },
    {
      nombre: 'Juego Ahorcado',
      descripcion: 'Juego clásico del ahorcado realizado como ejercicio.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Juego%20Ahorcado'
    },
    {
      nombre: 'Tabla Ascii',
      descripcion: 'Generador de tabla ASCII. Ejercicio de manejo de caracteres.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/Tabla%20Ascii'
    },
    {
      nombre: 'ToDo Tareas',
      descripcion: 'Aplicación para gestionar tareas pendientes. Ejercicio práctico.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/ToDo_Tareas'
    },
    {
      nombre: 'Ahorcado',
      descripcion: 'Otra versión del juego del ahorcado. Ejercicio de lógica.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f9?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/ahorcado'
    },
    {
      nombre: 'Sesión 10.1',
      descripcion: 'Ejercicios prácticos de la sesión 10.1.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/sesion%2010.1'
    },
    {
      nombre: 'Sesión 10',
      descripcion: 'Ejercicios prácticos de la sesión 10.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/sesion%2010'
    },
    {
      nombre: 'Sesión 7 JavaScript',
      descripcion: 'Ejercicios prácticos de la sesión 7 de JavaScript.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/sesion%207%20javascript'
    },
    {
      nombre: 'Sesión 15',
      descripcion: 'Ejercicios prácticos de la sesión 15.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/sesion.15'
    },
    {
      nombre: 'Sesión 11',
      descripcion: 'Ejercicios prácticos de la sesión 11.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      fotoUrl: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f9?fit=crop&w=600&q=80',
      repoUrl: 'https://github.com/Santiago2M/Santiago2M.github.io/tree/main/sesion%2011'
    }
  ];
}
