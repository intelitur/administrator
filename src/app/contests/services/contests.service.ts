import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/general-services/common.service';
import { environment } from 'src/environments/environment';
import { Contests } from '../models/Contest';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  contest: Array<Contests> = []; 
  module = "contests"
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  getContests(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`)
  }

  getContest(contest_id){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${contest_id}`)
  }

  changeStateContest(contest_id){
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${contest_id}`, null, {observe: 'response'})
  }

  createContest(contest: Contests){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, JSON.stringify(contest), {observe: 'response'})
  }
}
