import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/general-services/common.service';
import { environment } from 'src/environments/environment';
import { Contests } from '../models/Contest';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  contests: Array<Contests> = []; 
  module = "contests"
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }

  getContests(){
    let params = {
      state: "true"
    }
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`,  {params: params})
  }

  getContest(contest_id){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/${contest_id}`)
  }

  changeStateContest(contest){
    let json = {
      name: contest.name,
      detail: contest.detail,
      initial_date: contest.initial_date,
      final_date: contest.final_date,
      is_active: contest.is_active
    }
    console.log(json)
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}/${contest.contest_id}`, json, {observe: 'response'})
  }

  createContest(contest: Contests){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, contest, {observe: 'response'})
  }

  modifyContest(contest: Contests){
    let json = {
      name: contest.name,
      detail: contest.detail,
      initial_date: contest.initial_date,
      final_date: contest.final_date
    }
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}/${contest.contest_id}`, json, {observe: 'response'})
  }
}
