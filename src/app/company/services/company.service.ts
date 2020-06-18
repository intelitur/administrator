import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Company } from '../models/Company';
import { CommonService } from '../../general-services/common.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/general-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companies: Array<Company>;

  module = "company"

  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) {
   }


  /**
   * @funtion Get all companies
   */
  getCompanies(stateFilter?: number){
    let query : any = {state: stateFilter}
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`, {params: query});
  };

  /**
   * @funtion Get all companies
   */
  getCompany(company_id: number){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${company_id}`);
  };

  /**
   * @funtion Change company state
   */
  chageCompanyState({company_id}: Company){
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${company_id}/state`, undefined ,{observe: "response"});
  };

  updateCompany(company: Company){
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${company.company_id}`, company ,{observe: "response"});
  };

  createCompany(company: Company){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, company ,{observe: "response"})
  }

  /**
   * @function to get companies related to a specific event
   * @param event_id 
   */
  getCompaniesByEvent(event_id){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/getCompaniesByEvent/${event_id}`)
  }


  getCompanyEventRequests(user_id, company_id?, state?){
    return this.http.get(`${environment.SERVER_BASE_URL}`)
  }

}
