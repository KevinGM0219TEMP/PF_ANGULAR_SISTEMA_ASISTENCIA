import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAsistenciasVsFaltasComponent } from './chart-asistencias-vs-faltas.component';

describe('ChartAsistenciasVsFaltasComponent', () => {
  let component: ChartAsistenciasVsFaltasComponent;
  let fixture: ComponentFixture<ChartAsistenciasVsFaltasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAsistenciasVsFaltasComponent]
    });
    fixture = TestBed.createComponent(ChartAsistenciasVsFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
