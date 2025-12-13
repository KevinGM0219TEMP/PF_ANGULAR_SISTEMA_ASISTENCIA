import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAsistenciasMensualesComponent } from './chart-asistencias-mensuales.component';

describe('ChartAsistenciasMensualesComponent', () => {
  let component: ChartAsistenciasMensualesComponent;
  let fixture: ComponentFixture<ChartAsistenciasMensualesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAsistenciasMensualesComponent]
    });
    fixture = TestBed.createComponent(ChartAsistenciasMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
