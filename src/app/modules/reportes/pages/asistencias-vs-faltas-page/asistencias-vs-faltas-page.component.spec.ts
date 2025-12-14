import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasVsFaltasPageComponent } from './asistencias-vs-faltas-page.component';

describe('AsistenciasVsFaltasPageComponent', () => {
  let component: AsistenciasVsFaltasPageComponent;
  let fixture: ComponentFixture<AsistenciasVsFaltasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciasVsFaltasPageComponent]
    });
    fixture = TestBed.createComponent(AsistenciasVsFaltasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
