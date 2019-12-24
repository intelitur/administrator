import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/User.class';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private subscription: Subscription;
  user: User;
  users: Array<User>;


  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }


    /**
   * @funtion Get user
   * @param id User id
   */
  getUser(user_id: number){
    return this.http.get(`${environment.SERVER_BASE_URL}generalUsers/getUser/${user_id}`);
  };

  updateUser(user_id: number, user_info: JSON, passChanged: boolean){
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/updateUser`,{id: user_id, info: user_info, passCheck: passChanged});
  }

}
