import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosReportesComponent } from './filtros-reportes.component';

describe('FiltrosReportesComponent', () => {
  let component: FiltrosReportesComponent;
  let fixture: ComponentFixture<FiltrosReportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosReportesComponent]
    });
    fixture = TestBed.createComponent(FiltrosReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
