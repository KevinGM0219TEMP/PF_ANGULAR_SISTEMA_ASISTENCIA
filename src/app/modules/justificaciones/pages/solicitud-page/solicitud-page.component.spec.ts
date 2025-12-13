import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPageComponent } from './solicitud-page.component';

describe('SolicitudPageComponent', () => {
  let component: SolicitudPageComponent;
  let fixture: ComponentFixture<SolicitudPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudPageComponent]
    });
    fixture = TestBed.createComponent(SolicitudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
