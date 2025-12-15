import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartPuntualidadComponent } from './chart-puntualidad.component';

describe('ChartPuntualidadComponent', () => {
  let component: ChartPuntualidadComponent;
  let fixture: ComponentFixture<ChartPuntualidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartPuntualidadComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartPuntualidadComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
