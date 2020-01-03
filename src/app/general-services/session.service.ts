import { Injectable } from "@angular/core";
import { BusinessMan } from '../users/models/Businessman.class';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdministratorMan } from '../users/models/AdministratorMan.class';
import { CommonService } from './common.service';
import { User } from '../users/models/User.class';

@Injectable({
  providedIn: "root"
})
export class SessionService {

  public actualUser:User;
  public loadingLogin: boolean = false;


  constructor(private http: HttpClient,public commonService: CommonService) {
    this.actualUser = JSON.parse(localStorage.getItem(environment.localstorage_key));
  }

  /**
   * @funtion Register Businessman and return user_id
   * @param info
   * @return observable with user_id
   */
  saveUser(info: BusinessMan, role_id: number): Observable<any>{
    // NOTE: role_id = 1 is admin, 2 = businessman
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/saveUser`,{info: info, role_id: role_id});
  }

  saveUserAdmi(info: AdministratorMan, role_id: number): Observable<any>{
    // NOTE: role_id = 1 is admin, 2 = businessman
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/saveUser`,{info: info, role_id: role_id});
  }
  /**
   * @function Login user
   * @param email
   * @param password
   */
  login(email: String , password: String){

    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/loginUser`,{email: email, password: password});

  }

  sendCodePassword(email: String){
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/sendCodePassword`,{email: email});
  }

  changePasswordByCode(password: String, code: String){
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/changePasswordByCode`,{password: password, code: code});
  }

  logOut(){
    localStorage.removeItem(environment.localstorage_key);
    this.actualUser = null;
  }


}
