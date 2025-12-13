import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtUtils } from './core/utils/jwt-utils';
import { UserSessionService } from './core/user-session/user-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sistema-asistencia';

  constructor(private cookie: CookieService,private jwtUtils: JwtUtils, private userSession: UserSessionService){}

  ngOnInit(): void {
    const token = this.cookie.get('token');
    if(token){
      const decode = this.jwtUtils.decodeToken(token);
      this.userSession.setSession({
        idUsuario: decode.idUsuario,
        email: decode.sub,
        empleado: decode.Empleado
      });
    }
  }

}
