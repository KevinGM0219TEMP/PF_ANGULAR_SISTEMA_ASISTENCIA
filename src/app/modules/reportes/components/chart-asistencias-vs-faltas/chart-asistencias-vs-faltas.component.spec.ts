import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartAsistenciasVsFaltasComponent } from './chart-asistencias-vs-faltas.component';

describe('ChartAsistenciasVsFaltasComponent', () => {
  let component: ChartAsistenciasVsFaltasComponent;
  let fixture: ComponentFixture<ChartAsistenciasVsFaltasComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ChartAsistenciasVsFaltasComponent],
      schemas: [NO_ERRORS_SCHEMA] 
    });
    fixture = TestBed.createComponent(ChartAsistenciasVsFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
