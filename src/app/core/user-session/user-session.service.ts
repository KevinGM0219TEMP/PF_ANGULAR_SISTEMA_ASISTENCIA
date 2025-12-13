import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private _session$ = new BehaviorSubject<{ 
    idUsuario: number | null, 
    email: string | null, 
    empleado: string | null 
  }>({
    idUsuario: null,
    email: null,
    empleado: null
  });

  session$ = this._session$.asObservable();

  setSession(user: { idUsuario: number, email: string, empleado: string }) {
    this._session$.next(user);
  }

  clearSession() {
    this._session$.next({
      idUsuario: null,
      email: null,
      empleado: null
    });
  }

  
}
