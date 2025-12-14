import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntualidadPageComponent } from './puntualidad-page.component';

describe('PuntualidadPageComponent', () => {
  let component: PuntualidadPageComponent;
  let fixture: ComponentFixture<PuntualidadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntualidadPageComponent]
    });
    fixture = TestBed.createComponent(PuntualidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
