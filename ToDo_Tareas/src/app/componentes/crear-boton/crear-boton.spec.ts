import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBoton } from './crear-boton';

describe('CrearBoton', () => {
  let component: CrearBoton;
  let fixture: ComponentFixture<CrearBoton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearBoton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearBoton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
