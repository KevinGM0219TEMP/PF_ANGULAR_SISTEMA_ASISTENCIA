import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MarcarComponent } from './marcar.component';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { AsistenciaService } from '../../services/asistencia.service';

describe('MarcarComponent', () => {
  let component: MarcarComponent;
  let fixture: ComponentFixture<MarcarComponent>;

  const userSessionServiceMock = {
    session$: of({ idUsuario: 1 })
  };

  const asistenciaServiceMock = {
    getAsistenciaDiario: jasmine.createSpy().and.returnValue(of([])),
    chekIn: jasmine.createSpy().and.returnValue(of(null)),
    chekOut: jasmine.createSpy().and.returnValue(of(null))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcarComponent],
      providers: [
        { provide: UserSessionService, useValue: userSessionServiceMock },
        { provide: AsistenciaService, useValue: asistenciaServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
