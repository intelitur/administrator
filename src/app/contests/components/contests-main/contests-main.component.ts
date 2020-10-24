import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { Contests } from '../../models/Contest';
import { ContestsService } from '../../services/contests.service';
import { ContestsCreateComponent } from '../contests-create/contests-create.component';

@Component({
  selector: 'app-contests-main',
  templateUrl: './contests-main.component.html',
  styleUrls: ['./contests-main.component.scss']
})
export class ContestsMainComponent implements OnInit {

  filter: any = {
    name: ""
  };
  isFilters: boolean = false;
  private subscription: Subscription;

  constructor(
    public contestsService: ContestsService,
    public dialogService: MatDialog,
    public commonService: CommonService 
  ) { }

  ngOnInit() {
    this.obtainAllContest()
  }

  obtainAllContest(){
    this.subscription = this.contestsService.getContests()
    .subscribe({
      next: (data: any) => {
        console.log(data)
        this.contestsService.contests = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  changeState(contest: Contests, {source}: any){
    contest.is_active = !contest.is_active;
    this.contestsService.changeStateContest(contest).subscribe({
      next: (data: any) => {
        if (data.status == 204) {
          source.checked = contest.is_active
          if (contest.is_active)
            this.commonService.openSnackBar(
              `El anuncio ${contest.name} ha sido activado`,
              "OK"
            );
          else
            this.commonService.openSnackBar(
              `El anuncio ${contest.name} ha sido desactivado`,
              "OK"
            );
        } else {
          contest.is_active = !contest.is_active;
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        source.checked = contest.is_active
      }
    });
  }

  openCreateDialog(){
    this.dialogService.open(ContestsCreateComponent, {width: "60%", height:"70%", minWidth: "280px", disableClose: true})
  }
}
