import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/models/User.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public _http: HttpClient) {}

  /**
   * This method set item of type User to localStorage
   * @param user 
   */
  login(user: User): void {
    localStorage.setItem(`${environment.localstorage_key}`, JSON.stringify(user));
  }

  /**
   * RemoveItem from localStorage based on environment's key
   */
  logout(): any {
    localStorage.removeItem(`${environment.localstorage_key}`);
  }

  /**
   * Return parsed item from LocalStorage
   */
  getUser(): User {
    return JSON.parse(localStorage.getItem(`${environment.localstorage_key}`));
  }

  /**
   * Check if the user is logged
   */
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

/**
 * export service to be provided in the root level
 */
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];