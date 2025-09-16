import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sobremi-root',
  templateUrl: './sobremi.html',
  styleUrls: ['./sobremi.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SobreMiComponent {}
