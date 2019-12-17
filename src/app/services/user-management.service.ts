import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User.class';
import { CommonService } from '../general-services/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  users: Array<User>;
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  /**
   * @funtion Get all user
   */
  getAllUser(){
    this.http.get(`${environment.SERVER_BASE_URL}generalUsers/getAllUsers`).subscribe({
      next: (data : Array<User>) => {
        this.users = data;
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });
  }



}
