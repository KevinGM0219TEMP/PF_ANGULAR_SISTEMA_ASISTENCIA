import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { JwtUtils } from 'src/app/core/utils/jwt-utils';

import { AuthService } from './auth.service';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { enviroment } from 'src/app/environments/enviroment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  const cookieServiceMock = {
    set: jasmine.createSpy('set'),
    get: jasmine.createSpy('get').and.returnValue('fake-token'),
    delete: jasmine.createSpy('delete')
  };

  const jwtUtilsMock = {
    decodeToken: jasmine.createSpy('decodeToken').and.returnValue({
      idUsuario: 1,
      sub: 'kevin@mail.com',
      Empleado: 'Kevin Garcia'
    })
  };

  const userSessionMock = {
    setSession: jasmine.createSpy('setSession')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
        { provide: CookieService, useValue: cookieServiceMock },
        { provide: JwtUtils, useValue: jwtUtilsMock },
        { provide: UserSessionService, useValue: userSessionMock }
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sendCredentials should login and set session', () => {

    service.sendCredentials('kevin@mail.com', '123456')
      .subscribe(token => {
        expect(token).toBe('fake-jwt-token');
      });

    const req = httpMock.expectOne(`${enviroment.api}/auth/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('content-type'))
      .toBe('application/x-www-form-urlencoded');

    req.flush('fake-jwt-token');

    expect(cookieServiceMock.set).toHaveBeenCalledWith(
      'token',
      'fake-jwt-token',
      3,
      '/'
    );

    expect(jwtUtilsMock.decodeToken).toHaveBeenCalledWith('fake-jwt-token');

    expect(userSessionMock.setSession).toHaveBeenCalledWith({
      idUsuario: 1,
      email: 'kevin@mail.com',
      empleado: 'Kevin Garcia'
    });
  });

  it('logout should delete token', () => {
    service.logout();
    expect(cookieServiceMock.delete).toHaveBeenCalledWith('token', '/');
  });

  it('getToken should return token', () => {
    const token = service.getToken();
    expect(token).toBe('fake-token');
  });

});
