import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { JwtUtils } from '../utils/jwt-utils';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService,private jwtUtils:JwtUtils) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    try{
      const token=this.cookieService.get('token');

      if(token && !this.jwtUtils.isExpired(token)){
        let newRequest = request.clone({
          setHeaders:{
            authorization: `Bearer ${token}`
          }
        });
        return next.handle(newRequest);
      }
      return next.handle(request);
      
    }
    catch(error){
      console.log('Error in InjectSessionInterceptor',error);
    }
    return next.handle(request);

  }
}
