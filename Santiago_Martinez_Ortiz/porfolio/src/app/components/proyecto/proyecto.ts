import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Proyecto } from '../../models/proyecto.model';

@Component({
  selector: 'proyecto-root',
  standalone: true,
  templateUrl: './proyecto.html',
  styleUrls: ['./proyecto.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class ProyectoComponent {
  proyecto = input.required<Proyecto>();
}
