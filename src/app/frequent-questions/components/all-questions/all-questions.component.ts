import { Component, OnInit } from '@angular/core';
import { FrequentQuestionsService } from '../../services/frequent-questions.service';
import { AuthService } from 'src/app/general-services/auth.service';
import { MatDialog } from '@angular/material';
import { QuestionsCreateComponent } from '../questions-create/questions-create.component';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.scss']
})
export class AllQuestionsComponent implements OnInit {


  constructor(
    public frequentQuestionService: FrequentQuestionsService,
    public authService: AuthService,
    public dialogService: MatDialog,
  ) { }

  ngOnInit() {
  }

  openCreateQuestionDialog(){
    this.dialogService.open(QuestionsCreateComponent, {width: "60%", height:"70%" ,minWidth: "280px", disableClose: true})
  }

  changeStateRequest(fq, state){
    this.frequentQuestionService.changeQuestionState(fq.question_id, state).subscribe({
      next: (data: any) => {
        data.status == 201? 
          this.frequentQuestionService.getAllQuestions().subscribe({
            next: (data:any) => {
              this.frequentQuestionService.frequentQuestions = data
            }
          })
        : 
        null
      }
    })
  }

}
