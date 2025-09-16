import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoAhorcado } from './texto-ahorcado';

describe('TextoAhorcado', () => {
  let component: TextoAhorcado;
  let fixture: ComponentFixture<TextoAhorcado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoAhorcado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoAhorcado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
