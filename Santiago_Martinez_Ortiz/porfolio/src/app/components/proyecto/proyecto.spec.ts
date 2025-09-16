import { TestBed } from '@angular/core/testing';
import { ProyectoComponent } from './proyecto';

describe('ProyectoComponent (standalone)', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(ProyectoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
