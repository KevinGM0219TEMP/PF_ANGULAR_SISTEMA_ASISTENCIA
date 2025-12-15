import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HistorialPageComponent } from './historial-page.component';
import { JustificacionesService } from '../../services/justificaciones.service';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { FormsModule } from '@angular/forms';

describe('HistorialPageComponent', () => {
  let component: HistorialPageComponent;
  let fixture: ComponentFixture<HistorialPageComponent>;

  const justificacionesServiceMock = {
    getAsistenciasPaged: jasmine.createSpy().and.returnValue(
      of({
        content: [],
        totalPages: 0
      })
    )
  };

  const userSessionServiceMock = {
    session$: of({
      idUsuario: 1
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialPageComponent],
      imports:[FormsModule],
      providers: [
        { provide: JustificacionesService, useValue: justificacionesServiceMock },
        { provide: UserSessionService, useValue: userSessionServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
