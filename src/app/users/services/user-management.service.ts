import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User.class';
import { CommonService } from '../../general-services/common.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private subscription: Subscription;
  users: Array<any>;
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  /**
   * @funtion Get all user
   */
  getAllUser(){
    this.subscription = this.http.get(`${environment.SERVER_BASE_URL}generalUsers/getAllUsers`).subscribe({
      next: (data: any) => {
        this.users = data.data;
        this.subscription.unsubscribe();
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });
  };

  /**
   * @funtion Change available or state for user
   * @param user_id
   * @param info
   */
  changeAvailableOrStateUser(user_id: number, info: any) : Observable<any> {
    return this.http.post(`${environment.SERVER_BASE_URL}generalUsers/changeAvailableOrStateUser`,{id: user_id,info: info});
  };



}
