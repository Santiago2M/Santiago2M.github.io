import { TestBed } from '@angular/core/testing';
import { CabeceraComponent } from './cabecera';
import { AppSectionService } from '../../services/app-section.service';

describe('CabeceraComponent (standalone)', () => {
  it('should create and change section', async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraComponent],
      providers: [AppSectionService]
    }).compileComponents();

    const fixture = TestBed.createComponent(CabeceraComponent);
    const component = fixture.componentInstance;
    const service = TestBed.inject(AppSectionService);

    expect(component).toBeTruthy();

    component.seleccionarSeccion('porfolio');
    expect(service.seccionActual()).toBe('porfolio');
  });
});
