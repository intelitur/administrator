import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contests } from 'src/app/contests/models/Contest';
import { ContestsService } from 'src/app/contests/services/contests.service';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-contests-details',
  templateUrl: './contests-details.component.html',
  styleUrls: ['./contests-details.component.scss']
})
export class ContestsDetailsComponent implements OnInit {

  @Input() contest: Contests;
  contestsFG: FormGroup;

  start_Date = undefined;
  end_Date = undefined;
  loading = false;

  constructor(
    private datePipe: DatePipe,
    public commonService: CommonService,
    public contetsService: ContestsService
  ) {
    this.contestsFG = new FormGroup({
      name: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required),
    })
   }

  ngOnInit() {
    this.setData()
  }
  
  setData(){
    this.contestsFG.controls['name'].setValue(this.contest.name)
    this.contestsFG.controls['details'].setValue(this.contest.detail)
    this.start_Date = new Date(this.datePipe.transform(this.contest.initial_date))
    this.end_Date =  new Date(this.datePipe.transform(this.contest.final_date))
  }

  dateFilter = (date: Date): boolean => {
    return date >= this.start_Date
  }
  
  modifyContest(){

    this.loading = true;
    this.contestsFG.disable()

    let startDate = this.formatDates(this.start_Date)
    let endDate = this.formatDates(this.end_Date)

    let newContest: Contests = {
      contest_id: this.contest.contest_id,
      name: this.contestsFG.controls['name'].value,
      detail: this.contestsFG.controls['details'].value,
      initial_date: startDate,
      final_date: endDate,
      is_active: this.contest.is_active
    }

    this.contetsService.modifyContest(newContest).subscribe({
      next: async (data: any) => {
        if (data.status == 200) {
          this.contestsFG.enable()
          this.contest= newContest;

          this.commonService.openSnackBar(`El concurso ${this.contest.name} ha sido cambiado`,"OK")
          this.loading = false;
        }
        else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
          this.loading = false;
        this.contestsFG.enable()
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.loading = false;
        this.contestsFG.enable()
      }
    })
  }

  changeState({source}: any){
    var contest = this.contest
    this.contest.is_active = !this.contest.is_active;
    this.contetsService.changeStateContest(contest).subscribe({
      next: (data: any) => {
        console.log(data)
        if (data.status == 200) {
          source.checked = this.contest.is_active
          if (this.contest.is_active)
            this.commonService.openSnackBar(
              `El anuncio ${this.contest.name} ha sido activado`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `El anuncio ${this.contest.name} ha sido desactivado`,
              "OK"
            );
        } else {
          this.contest.is_active = !this.contest.is_active;
          source.checked = this.contest.is_active
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        this.contest.is_active = !this.contest.is_active;
        source.checked = this.contest.is_active
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
