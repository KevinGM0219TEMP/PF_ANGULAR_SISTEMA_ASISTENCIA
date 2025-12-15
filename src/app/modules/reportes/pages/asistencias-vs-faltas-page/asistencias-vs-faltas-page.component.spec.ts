import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { AsistenciasVsFaltasPageComponent } from './asistencias-vs-faltas-page.component';
import { ReportesService } from '../../services/reportes.service';
import { FiltrosReportes } from 'src/app/core/models/FiltrosReporte';

describe('AsistenciasVsFaltasPageComponent', () => {
  let component: AsistenciasVsFaltasPageComponent;
  let fixture: ComponentFixture<AsistenciasVsFaltasPageComponent>;

  const reportesServiceMock = {
    getReporteAsistenciaFaltas: jasmine
      .createSpy()
      .and.returnValue(
        of([
          {
            idUsuario: 1,
            empleado: 'Kevin Garcia',
            totalAsistencias: 20,
            totalFaltas: 2
          }
        ])
      )
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsistenciasVsFaltasPageComponent],
      providers: [
        { provide: ReportesService, useValue: reportesServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciasVsFaltasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and aggregate data globally when no employee filter', (done) => {
    const filtros: FiltrosReportes = {
      fecha_inicio: '2025-06-01',
      fecha_fin: '2025-06-30',
      modo: 'GLOBAL'
    };

    component.onFiltrosChange(filtros);

    component.filteredData$.subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].empleado).toBe('GLOBAL');
      expect(data[0].totalAsistencias).toBe(20);
      expect(data[0].totalFaltas).toBe(2);
      done();
    });
  });

  it('should filter by employee when empleadoFiltro is provided', (done) => {
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
