import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrosReportesComponent } from './filtros-reportes.component';

describe('FiltrosReportesComponent', () => {
  let component: FiltrosReportesComponent;
  let fixture: ComponentFixture<FiltrosReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltrosReportesComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrosReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
