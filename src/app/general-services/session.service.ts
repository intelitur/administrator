import { Injectable } from "@angular/core";
import { BusinessMan } from '../users/models/Businessman.class';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AdministratorMan } from '../users/models/AdministratorMan.class';

@Injectable({
  providedIn: "root"
})
export class SessionService {

  actualUser = null;

  constructor(private http: HttpClient) {
    this.actualUser = JSON.parse(localStorage.getItem("actualUser"));
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

  login(email, password){
    localStorage.setItem("actualUser",JSON.stringify("{id: 1, nombre: 'Pablo'}"));
    this.actualUser = JSON.parse(localStorage.getItem("actualUser"));
  }

  logOut(){
    localStorage.removeItem("actualUser");
    this.actualUser = null;
  }


}
