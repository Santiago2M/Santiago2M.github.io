import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionService } from '../../services/app-section.service';
import { SobreMiComponent } from '../sobremi/sobremi';
import { FormacionYExperienciaComponent } from '../habilidades/habilidades';
import { PorfolioComponent } from '../porfolio/porfolio';

@Component({
  selector: 'main-root',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SobreMiComponent, FormacionYExperienciaComponent, PorfolioComponent],
  standalone: true
})
export class MainComponent {
  constructor(public sectionService: AppSectionService) {}
  get seccionActual() {
    return this.sectionService.seccionActual();
  }
}
