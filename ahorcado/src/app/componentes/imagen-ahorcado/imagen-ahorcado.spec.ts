import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenAhorcado } from './imagen-ahorcado';

describe('ImagenAhorcado', () => {
  let component: ImagenAhorcado;
  let fixture: ComponentFixture<ImagenAhorcado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenAhorcado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenAhorcado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
