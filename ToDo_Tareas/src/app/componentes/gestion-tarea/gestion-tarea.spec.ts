import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTarea } from './gestion-tarea';

describe('GestionTarea', () => {
  let component: GestionTarea;
  let fixture: ComponentFixture<GestionTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
