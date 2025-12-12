import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtUtils } from '../utils/jwt-utils';

const checkSession = (): boolean => {
  try{
    const cokieService = inject(CookieService);
    const tokenCheck = cokieService.check('token');
    const jwtUtils = inject(JwtUtils);

    if (!tokenCheck) return false;

    const token = cokieService.get('token');

    if(jwtUtils.isExpired(token)){
      return false;
    }

    return true;
  }catch(error){
    return false;
  }
}


export const sessionGuard: CanActivateFn = (route, state) => {
  
  const isValidSession = checkSession();
  const router = inject(Router);
  
  if(!isValidSession){
    router.navigate(['/','auth']);
  }
  return isValidSession;

};
