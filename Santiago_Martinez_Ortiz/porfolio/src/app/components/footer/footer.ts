import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class FooterComponent {}
