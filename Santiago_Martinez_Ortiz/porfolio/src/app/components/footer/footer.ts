import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppSectionService } from '../../services/app-section.service';

@Component({
  selector: 'footer-root',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'footer-fixed'
  }
})
export class FooterComponent {
  constructor(private sectionService: AppSectionService) {}
  irAContacto(event: Event) {
    event.preventDefault();
    this.sectionService.cambiarSeccion('contacto');
  }
}
