/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home auth guard
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(  next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if ( this.userService.isLogged() ) {
      if (state.url === '/welcome' || state.url === '/signup' || state.url === '/auth' ) {
        this.router.navigate(['/']);
        return false;
      }

      return true;
    } else {
      if (state.url === '/welcome' || state.url === '/signup' || state.url === '/auth' ) {
        return true;
      }

      this.router.navigate(['/welcome']);
      return false;
    }
  }
}
