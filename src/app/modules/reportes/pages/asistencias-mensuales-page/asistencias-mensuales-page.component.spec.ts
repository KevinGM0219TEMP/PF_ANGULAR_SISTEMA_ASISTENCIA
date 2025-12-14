import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasMensualesPageComponent } from './asistencias-mensuales-page.component';

describe('AsistenciasMensualesPageComponent', () => {
  let component: AsistenciasMensualesPageComponent;
  let fixture: ComponentFixture<AsistenciasMensualesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciasMensualesPageComponent]
    });
    fixture = TestBed.createComponent(AsistenciasMensualesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
