import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAsistenciasMensualesComponent } from './chart-asistencias-mensuales.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChartAsistenciasMensualesComponent', () => {
  let component: ChartAsistenciasMensualesComponent;
  let fixture: ComponentFixture<ChartAsistenciasMensualesComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ChartAsistenciasMensualesComponent],
      schemas: [NO_ERRORS_SCHEMA] 
    });
    fixture = TestBed.createComponent(ChartAsistenciasMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
