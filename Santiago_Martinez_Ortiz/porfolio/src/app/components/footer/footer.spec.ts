import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer';

describe('FooterComponent (standalone)', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
