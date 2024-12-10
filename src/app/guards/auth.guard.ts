import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
   const loginService= inject(LoginService);
     const router=inject(Router);
     const allowedRoles=route.data['roles'];
     const userRole=loginService.getUserRole();
     if (userRole && allowedRoles.includes(userRole)) {
       return true
     } 
     router.navigate(['/login']);

  return false;
};
