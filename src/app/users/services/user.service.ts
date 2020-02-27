import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User.class';
import { CommonService } from '../../general-services/common.service';
import { Observable, Subscription } from 'rxjs';
import { BusinessMan } from '../models/Businessman.class';
import { AdministratorMan } from '../models/AdministratorMan.class';
import { AuthService } from 'src/app/general-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public actualUser: User;
  public loadingLogin: boolean = false;
  users: Array<any>;

  constructor(
    private http: HttpClient,
    public commonService: CommonService,
    public authService: AuthService
  ) {
    this.actualUser = this.authService.getUser();
   }


  /**
   * @funtion Get all user
   */
  getAllUser(){
    return this.http.get(`${environment.SERVER_BASE_URL}generalUsers/getAllUsers`);
  };

  /**
   * @funtion Change available or state for user
   * @param user_id
   * @param info
   */
  changeAvailableOrStateUser(user_id: number, info: any) : Observable<any> {
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/changeAvailableOrStateUser`,{id: user_id,info: info});
  };

   /**
   * @funtion Register Businessman and return user_id
   * @param info
   * @return observable with user_id
   */
  saveUser(info: BusinessMan, role_id: number): Observable<any>{
    // NOTE: role_id = 1 is admin, 2 = businessman
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/saveUser`,{info: info, role_id: role_id});
  }
  /**
   * @function Save user admin
   * @param info
   * @param role_id
   */
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

  /**
   * @function Send code to change password
   * @param email
   */
  sendCodePassword(email: String){
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/sendCodePassword`,{email: email});
  }

  /**
   * @function Send code and password to change password
   * @param password
   * @param code
   */
  changePasswordByCode(password: String, code: String){
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/changePasswordByCode`,{password: password, code: code});
  }

  /**
   * @function Log out session
   */
  logOut(){
    this.authService.logout();
    this.actualUser = null;
  }

 /**
   * @funtion Get user
   * @param id User id
   */
  getUser(user_id: number){
    return this.http.get(`${environment.SERVER_BASE_URL}generalUsers/getUser/${user_id}`);
  };

  /**
   * @function Update User
   * @param user_id
   * @param user_info
   * @param passChanged
   */
  updateUser(user_id: number, user_info: JSON, passChanged: boolean){
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/updateUser`,{id: user_id, info: user_info, passCheck: passChanged});
  }



}
