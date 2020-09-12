import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { MultimediaService } from 'src/app/general-services/multimedia.service';
import { Contests } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';

@Component({
  selector: 'app-contests-create',
  templateUrl: './contests-create.component.html',
  styleUrls: ['./contests-create.component.scss']
})
export class ContestsCreateComponent implements OnInit {

  contestsFG: FormGroup;
  private subscription: Subscription;

  start_Date = undefined;
  end_Date = undefined;
  today: any = new Date();

  constructor(
    public dialogRef: MatDialogRef<ContestsCreateComponent>,
    public commonService: CommonService,
    public multimediaService: MultimediaService,
    public router: Router,
    public contestsService: ContestsService 
  ) { 
    this.contestsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required),
    })
  }

  ngOnInit() {

  }

  onNoClick(){
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }

  onSubmit(){
    let initalDate = this.formatDates(this.start_Date)
    let finalDate = this.formatDates(this.end_Date)
    let contest: Contests = {
      name: this.contestsFG.controls['name'].value,
      details: this.contestsFG.controls['details'].value,
      initial_date: initalDate,
      final_date: finalDate
    }
    console.log(contest)
    this.createAd(contest);
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date
  }

  createAd(contest: Contests){
    this.contestsFG.disable();
    this.contestsService.createContest(contest).subscribe({
      next: async (data: any) => {
        if (data.status == 200) {
          this.commonService.openSnackBar(
            `El anuncio ${this.contestsFG.value.name} se ha creado`,
            "OK"
          );
          this.dialogRef.close();
          this.router.navigate([`/ads/${data.body.ad_id}`])
        } else {  
          this.commonService.openSnackBar(
            `Error al crear el anuncio: ${data.error}`,
            "OK"
          );
          this.contestsFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.contestsFG.enable()
      }
    });
  }

  formatDates(date: Date){
    if(date != undefined){
      date.setTime( date.getTime() + date.getTimezoneOffset()*60*1000 )

      let year = date.getFullYear()
      let month = (date.getMonth()+1) >= 10? (date.getMonth()+1) : "0"+(date.getMonth()+1) 
      let day = date.getDate() >= 10? date.getDate(): "0"+date.getDate()
      return year+"-"+month+"-"+day 
    }
  }
}
