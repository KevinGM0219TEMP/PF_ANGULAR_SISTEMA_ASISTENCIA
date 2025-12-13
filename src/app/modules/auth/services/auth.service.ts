import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { UserSessionService } from 'src/app/core/user-session/user-session.service';
import { JwtUtils } from 'src/app/core/utils/jwt-utils';
import { enviroment } from 'src/app/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = enviroment.api;

  constructor(private httpClient: HttpClient,private cookieService: CookieService,
    private jwtUtils: JwtUtils,private userSession: UserSessionService) { }

  sendCredentials(email:string,password:string): Observable<any>{
    const body = new HttpParams()
    .set('username', email)
    .set('password', password);

    return this.httpClient.post<any>(`${this.URL}/auth/login`,body.toString(),
    {
      headers :  new HttpHeaders({
        'content-type':'application/x-www-form-urlencoded'
      }),
      responseType: 'text' as 'json'
    }
    ).pipe(
      tap( token => {
        this.cookieService.set('token',token,3,'/');

        const decode =this.jwtUtils.decodeToken(token);

        this.userSession.setSession({
          idUsuario: decode.idUsuario,
          email: decode.sub,
          empleado: decode.Empleado
        });

      })
    );
  }

  logout(): void{
    this.cookieService.delete('token','/');
  }

  getToken(): string | null {
    return this.cookieService.get('token') || null;
  }

}
