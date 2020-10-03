import { Injectable } from '@angular/core';
import { FrequentQuestion } from '../models/question';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isBoolean } from 'util';
import { AuthService } from 'src/app/general-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FrequentQuestionsService {

  frequentQuestions: Array<FrequentQuestion>;
  module = "frequentQuestions"
  filter = {
    state: '0',
    is_active: '0'
  }

  constructor(
    private http: HttpClient,
    public commonService: CommonService,
    private authService: AuthService
  ) { }


  createQuestion(question){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/`, question, {observe: 'response'})
  }

  updateQuestion(question_id, state, is_active){
    let json = {
      is_active,
	    state
    }
    console.log(json)
    return this.http.patch(`${environment.SERVER_BASE_URL}${this.module}/${question_id}`,json, {observe: 'response'} ) 
  }

  refreshData(){
    this.frequentQuestions = null;

    let state = Number(this.filter.state)
    state == 0? state = undefined : state = Number(this.filter.state)

    let is_active = Number(this.filter.is_active)
    is_active == 0? is_active = undefined : is_active = Number(this.filter.is_active)

    let user: any = this.authService.getUser()
    user.role_id == 1 ? user = undefined : user = user.role_id

    this.getAllQuestions(user, is_active, state).subscribe((data: any) =>{ 
      this.frequentQuestions = data;
    })
  }

  getAllQuestions(creator: any, is_active: any, state: any){
    let params:any = {}; 
    creator != undefined? params.creator = creator: null;
    is_active == undefined? null : is_active == 1? params.is_active = true : params.is_active = false;
    state != undefined? params.state = state : null;

    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`,{params: params}) 
  }

}
