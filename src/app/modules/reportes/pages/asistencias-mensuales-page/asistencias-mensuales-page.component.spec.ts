import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasMensualesPageComponent } from './asistencias-mensuales-page.component';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';

describe('AsistenciasMensualesPageComponent', () => {
  let component: AsistenciasMensualesPageComponent;
  let fixture: ComponentFixture<AsistenciasMensualesPageComponent>;

  const reportesServiceMock = {
    getReporteAsistenciaMensual: jasmine
      .createSpy()
      .and.returnValue(of([]))
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AsistenciasMensualesPageComponent],
      providers: [
        { provide: ReportesService, useValue: reportesServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AsistenciasMensualesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
