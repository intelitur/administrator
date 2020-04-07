import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/Company';


@Injectable({
  providedIn: 'root'
})
export class CompanyUsersService {

  companies: Array<Company>;
  requests: Array<any>

  companyModule = "company"
  requestModule = "request"
  userModule = "generalUsers"

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

  getUserRequests(user_id: number, state?: number) {
    let query: any = { state };
    return this.http.get(`${environment.SERVER_BASE_URL}${this.requestModule}/user/${user_id}/`, { params: query });
  };

  updateRequesState({user_company_id}: any, state: number, is_admin = false) {
    let body = { state, is_admin }
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.requestModule}/${user_company_id}/`, body, {observe: 'response'});
  }

  deleteUserFromCompany({user_company_id}: any){
    return this.http.delete(`${environment.SERVER_BASE_URL}${this.requestModule}/${user_company_id}/`, {observe: 'response'});
  }

  getUserCompanies(user_id: number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.userModule}/${user_id}/companies/`);
  }

  addUserToCompany(user_id: number, company_id: number, is_admin = false){
    const body = {user_id, is_admin}
    return this.http.post(`${environment.SERVER_BASE_URL}${this.companyModule}/${company_id}/users`, body, {observe: 'response'});
  }

  getRequests(state: any){
    let query : any = {state}
    return this.http.get(`${environment.SERVER_BASE_URL}${this.requestModule}`, {params: query});
  }

  requesUnion(user_id: number, company_id: number){
    let body : any = {user_id, company_id}
    return this.http.post(`${environment.SERVER_BASE_URL}${this.requestModule}`, body, {observe: 'response'});
  }


}
