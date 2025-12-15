import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { GestionPageComponent } from './gestion-page.component';
import { JustificacionesService } from '../../services/justificaciones.service';

describe('GestionPageComponent', () => {
  let component: GestionPageComponent;
  let fixture: ComponentFixture<GestionPageComponent>;

  const justificacionesServiceMock = {
    getAsistenciasPaged: jasmine.createSpy().and.returnValue(
      of({
        content: [],
        totalPages: 0
      })
    ),
    ProcesarJustificacion: jasmine.createSpy().and.returnValue(of(null))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionPageComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: JustificacionesService, useValue: justificacionesServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
