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
  public subscribeLogin: Subscription;

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

  login(email: String , password: String){
    this.loadingLogin = true;
    this.subscribeLogin = this.http.post(`${environment.SERVER_BASE_URL}generalUsers/loginUser`,{email: email, password: password}).subscribe({
      next: (data : any) => {
        this.loadingLogin = false;
        this.subscribeLogin.unsubscribe();
        localStorage.setItem(environment.localstorage_key,JSON.stringify({name: data.data.name, user_id: data.data.user_id, role_id: data.data.role_id}));
        this.actualUser = JSON.parse(localStorage.getItem(environment.localstorage_key));
        this.commonService.openSnackBar(`Bienvenido ${this.actualUser.name}`,"OK");
      }, error: (err : HttpErrorResponse)  => {
        this.subscribeLogin.unsubscribe();
        this.commonService.openSnackBar(`Error en la autenticación`,"OK");this.loadingLogin = false;}});

  }

  forgotPassword(email: String){
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/resetPassword`,{email: email});

  }

  resetNewPassword(password: String, code: String){
    console.log("Entro");
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/resetNewPassword`,{password: password, code: code});

  }
  logOut(){
    localStorage.removeItem(environment.localstorage_key);
    this.actualUser = null;
  }


}
