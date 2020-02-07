import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/Company';


@Injectable({
  providedIn: 'root'
})
export class CompanyUsersService {

  companies: Array<Company>;

  companyModule = "company"

  requestModule = "request"

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * @funtion Get all companies
   */
  getCompanyUsers(company_id: number) {
    return this.http.get(`${environment.SERVER_BASE_URL}${this.companyModule}/${company_id}/users`);
  };

  getCompanyRequests(company_id: number, state?: number) {
    let query: any = { state };
    return this.http.get(`${environment.SERVER_BASE_URL}${this.requestModule}/company/${company_id}/`, { params: query });
  };

  updateRequesState({user_company_id}: any, state: number) {
    let body = { state }
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.requestModule}/${user_company_id}/`, body, {observe: 'response'});
  }

  deleteUserFromCompany({user_company_id}: any){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.requestModule}/${user_company_id}/`, {observe: 'response'});
  }


}
