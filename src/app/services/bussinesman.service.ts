import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { BusinessMan } from '../models/Businessman.class';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../general-services/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessmanService {

  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  /**
   * @funtion Register Businessman and return user_id
   * @param info
   */
  registerBusinessman(info: BusinessMan): Observable<any>{
    return this.http.post(`${environment.SERVER_BASE_URL}businessman/register`,info);
  }

}
