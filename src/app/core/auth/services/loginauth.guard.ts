import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginauthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userlogin = JSON.parse(localStorage.getItem('logindata') || '{}');

    if (userlogin) {
      if (!userlogin && !userlogin.password && !userlogin.email) {
        return this.router.navigateByUrl('/');
      }
      // if (userlogin) {
      //   return this.router.navigateByUrl('daskborad');
      // }
    }
    return true;
  }
}
