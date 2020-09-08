import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/general-services/common.service';
import { Router } from '@angular/router';
import { FrequentQuestion } from '../../models/question';
import { HttpErrorResponse } from '@angular/common/http';
import { FrequentQuestionsService } from '../../services/frequent-questions.service';
import { AuthService } from 'src/app/general-services/auth.service';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.scss']
})
export class QuestionsCreateComponent implements OnInit {

  questionFG: FormGroup
  loading = false;

  constructor(
    private frequentQuestionService: FrequentQuestionsService,
    private commonService: CommonService,
    private router: Router,
    private dialogRef: MatDialogRef<QuestionsCreateComponent>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.questionFG = new FormGroup({
      question: new FormControl(null, Validators.required),
      answer: new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    let frequentQuestion: FrequentQuestion = {
      question: this.questionFG.controls['question'].value,
      answer: this.questionFG.controls['answer'].value
    }
    this.createQuestion(frequentQuestion)
  }

  createQuestion(frequentQuestion: FrequentQuestion){
    this.loading = true;
    this.questionFG.disable();
    this.frequentQuestionService.createQuestion(frequentQuestion).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          this.authService.getUser().role_id === 1 ?
            this.commonService.openSnackBar(`La pregunta ${this.questionFG.value.name} se ha creado`,"OK") 
          : 
            this.commonService.openSnackBar(`Se ha enviado la solicitud para crear la pregunta ${this.questionFG.value.name}`,"OK")
          this.dialogRef.close();
          this.router.navigate([`/questions/all`])
        } else {  
          this.commonService.openSnackBar(
            `Error al crear la pregunta: ${data.error}`,
            "OK"
          );
          this.questionFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.questionFG.enable()
      }
    });
  }
  
  closeDialog(){
    this.dialogRef.close()
  }

  onNoClick(){
    this.dialogRef.close()
  }

}
