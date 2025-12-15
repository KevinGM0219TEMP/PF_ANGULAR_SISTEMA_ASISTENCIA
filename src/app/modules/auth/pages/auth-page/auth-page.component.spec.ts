import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AuthPageComponent } from './auth-page.component';
import { AuthService } from '../../services/auth.service';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  const authServiceMock = {
    sendCredentials: jasmine.createSpy().and.returnValue(of('fake-token'))
  };

  const routerMock = {
    navigate: jasmine.createSpy()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthPageComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
