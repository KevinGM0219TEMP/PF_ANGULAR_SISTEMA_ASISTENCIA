import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtUtils } from '../utils/jwt-utils';
import { inject } from '@angular/core';

export const rolesGuard: CanActivateFn = (route:ActivatedRouteSnapshot) => {

  const cokieService = inject(CookieService);
  const jwtUtils = inject(JwtUtils);
  const router = inject(Router);

  if (!cokieService.check('token')) {
    router.navigate(['/','auth']);
    return false;
  }

  const token = cokieService.get('token');
  const userRoles = jwtUtils.getRoles(token);
  const requiredRoles = route.data['roles'] as string[];

  const allowed = userRoles.some(role => requiredRoles.includes(role));

  if (!allowed) {
    router.navigate(['/','home']);
  }


  return true;
};
