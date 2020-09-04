import { Injectable } from '@angular/core';
import { FrequentQuestion } from '../models/question';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrequentQuestionsService {

  frequentQuestions: Array<FrequentQuestion> = []; 
  module = "frequentQuestions"
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) { }


  createQuestion(question){
    return this.http.post(`${environment.SERVER_BASE_URL}${this.module}/CreateCategory`, question, {observe: 'response'})
  }

  changeQuestionState(question_id, state){
    let json = {
      "question_id": question_id, 
	    "state": state
    }
    return this.http.put(`${environment.SERVER_BASE_URL}${this.module}/`,json, {observe: 'response'} ) 
  }

  getAllQuestions(){
    return this.http.get(`${environment.SERVER_BASE_URL}${this.module}/`)
  }

}
