import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AsistenciaPageComponent } from './asistencia-page.component';

describe('AsistenciaPageComponent', () => {
  let component: AsistenciaPageComponent;
  let fixture: ComponentFixture<AsistenciaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsistenciaPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
