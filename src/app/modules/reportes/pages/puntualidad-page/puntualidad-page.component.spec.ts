import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { PuntualidadPageComponent } from './puntualidad-page.component';
import { ReportesService } from '../../services/reportes.service';
import { FiltrosReportes } from 'src/app/core/models/FiltrosReporte';

describe('PuntualidadPageComponent', () => {
  let component: PuntualidadPageComponent;
  let fixture: ComponentFixture<PuntualidadPageComponent>;

  const reportesServiceMock = {
    getReportePuntualidad: jasmine
      .createSpy()
      .and.returnValue(
        of([
          {
            idUsuario: 1,
            empleado: 'Kevin Garcia',
            totalPuntual: 18,
            totalTardanzas: 2
          }
        ])
      )
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PuntualidadPageComponent],
      providers: [
        { provide: ReportesService, useValue: reportesServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntualidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should aggregate globally when no empleadoFiltro is provided', (done) => {
    const filtros: FiltrosReportes = {
      fecha_inicio: '2025-06-01',
      fecha_fin: '2025-06-30',
      modo: 'GLOBAL'
    };

    component.onFiltrosChange(filtros);

    component.filteredData$.subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].empleado).toBe('GLOBAL');
      expect(data[0].totalPuntual).toBe(18);
      expect(data[0].totalTardanzas).toBe(2);
      done();
    });
  });

  it('should filter by empleado when empleadoFiltro is provided', (done) => {
    const filtros: FiltrosReportes = {
      fecha_inicio: '2025-06-01',
      fecha_fin: '2025-06-30',
      modo: 'EMPLEADO',
      empleadoFiltro: 'kevin'
    };

    component.onFiltrosChange(filtros);

    component.filteredData$.subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].empleado).toContain('Kevin');
      done();
    });
  });
});
