import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HistorialComponent } from './historial.component';
import { AsistenciaService } from '../../services/asistencia.service';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { JustificacionesService } from 'src/app/modules/justificaciones/services/justificaciones.service';
import { of } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
describe('HistorialComponent', () => {
  let component: HistorialComponent;
  let fixture: ComponentFixture<HistorialComponent>;
  const asistenciaServiceMock = {
    getPagination: jasmine.createSpy().and.returnValue(of())
  };
  const justificacionesServiceMock = {
    registrarJustificacion: jasmine.createSpy(),
    procesarJustificacion: jasmine.createSpy()
  };
  const userSessionServiceMock = {
    session$: of({ idUsuario: 1 })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialComponent],
      imports: [
        HttpClientTestingModule // 🔑 ESTO ES CLAVE
      ],
      providers: [
        { provide: AsistenciaService, useValue: asistenciaServiceMock },
        { provide: UserSessionService, useValue: userSessionServiceMock },
        { provide: HTTP_INTERCEPTORS, useValue: [], multi: true }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
