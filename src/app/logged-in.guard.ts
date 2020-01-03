import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './general-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivateChild {
  constructor(private authService: AuthService) {}

  /**
   *
   * @param next
   * @param state
   */
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    return isLoggedIn;
  }
}
