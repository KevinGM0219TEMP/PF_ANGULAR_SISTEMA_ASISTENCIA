import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { SolicitudPageComponent } from './solicitud-page.component';
import { JustificacionesService } from '../../services/justificaciones.service';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';

describe('SolicitudPageComponent', () => {
  let component: SolicitudPageComponent;
  let fixture: ComponentFixture<SolicitudPageComponent>;

  const justificacionesServiceMock = {
    RegistrarJustificacion: jasmine.createSpy().and.returnValue(of(null))
  };

  const userSessionServiceMock = {
    session$: of({ idUsuario: 1 })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudPageComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: JustificacionesService, useValue: justificacionesServiceMock },
        { provide: UserSessionService, useValue: userSessionServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
