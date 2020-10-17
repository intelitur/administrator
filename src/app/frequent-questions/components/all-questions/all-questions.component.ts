import { Component, OnInit } from '@angular/core';
import { FrequentQuestionsService } from '../../services/frequent-questions.service';
import { AuthService } from 'src/app/general-services/auth.service';
import { MatDialog } from '@angular/material';
import { QuestionsCreateComponent } from '../questions-create/questions-create.component';
import { FrequentQuestion } from '../../models/question';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.refresh()
  }

  refresh(){
    this.frequentQuestionService.refreshData();
  }

  openCreateQuestionDialog(){
    this.dialogService.open(QuestionsCreateComponent, {width: "60%", height:"70%" ,minWidth: "280px", disableClose: true})
  }

  changeStateRequest(fq: FrequentQuestion, state){
    this.frequentQuestionService.updateQuestion(fq.frequent_question_id, state, fq.is_active).subscribe({
      next: (data: any) => {

        data.status != 204 ? null : state == 1? 
        this.commonService.openSnackBar(`La pregunta ha sido aceptada`,"OK") 
          : 
        this.commonService.openSnackBar(`La pregunta ha sido rechazada`,"OK")

        data.status == 204? this.refresh() : null
      }
    })
  }

  changeActive(fq: FrequentQuestion, {source}: any){
    console.log(source.checked)
    this.frequentQuestionService.updateQuestion(fq.frequent_question_id, fq.state, source.checked).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          fq.is_active = !fq.is_active;
          source.checked = fq.is_active
          if (fq.is_active)
            this.commonService.openSnackBar(
              `La pregunta ha sido activada`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `La pregunta ha sido desactivada`,
              "OK"
            );
        } else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        source.checked = fq.is_active
      }
    });
  }

}
