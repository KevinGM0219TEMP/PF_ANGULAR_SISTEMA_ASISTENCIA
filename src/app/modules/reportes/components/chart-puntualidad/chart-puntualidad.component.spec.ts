import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPuntualidadComponent } from './chart-puntualidad.component';

describe('ChartPuntualidadComponent', () => {
  let component: ChartPuntualidadComponent;
  let fixture: ComponentFixture<ChartPuntualidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartPuntualidadComponent]
    });
    fixture = TestBed.createComponent(ChartPuntualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
