import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/general-services/auth.service';
import { AdsService } from '../../services/ads.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { UserService } from 'src/app/users/services/user.service';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ads-stadistics',
  templateUrl: './ads-stadistics.component.html',
  styleUrls: ['./ads-stadistics.component.scss']
})
export class AdsStadisticsComponent implements OnInit {

  private subscription: Subscription;
  adsFG: FormGroup;
  loading = false;
  today = new Date()
  lineChartData: ChartDataSets[] = [{data: [0], label: 'Visitas por fecha' }];
  lineChartLabels: Label[] = [this.today.getDate().toString()];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(91, 93, 217, 0.6)',
    },
  ];



  constructor(
    public authService: AuthService,
    public commonService: CommonService,
    public adService: AdsService,
    private datePipe: DatePipe,
    public companyUsersService: CompanyUsersService
  ) {
    this.adsFG = new FormGroup({
      ads: new FormControl(null, Validators.required),
    })
   }

  ngOnInit() {
    this.obtainAllEvents()
  }

  refreshChart(){
    this.loading = true;
    let selectedAd = this.adsFG.controls['ads'].value
    this.adService.getAd(selectedAd).subscribe({
      next: (data:any) => {
        let visits = [];
        let labels = [];
        let initialDate = data.active_range.start;
        let finalDate = data.active_range.end;
        
        while(initialDate != finalDate){
          labels.push(initialDate)
          visits.push(data.visits.initialDate)
          initialDate = new Date(this.datePipe.transform(initialDate))
          initialDate.setDate(initialDate.getDate() + 1);
          initialDate = this.formatDates(initialDate)
        }

        this.lineChartLabels = labels
        this.lineChartData = [{data: visits, label: 'Visitas por fecha' }]
        this.loading = false;
      }
    })
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

  async obtainAllEvents(){
    let user = this.authService.getUser()
    if(user.role_id == 2){

      this.subscription = this.adService.getStadisticsAds(user.user_id)
      .subscribe({
        next: (data: any) => {
          this.adService.ads = data;
          this.adsFG.controls['ads'].setValue(this.adService.ads[0].ad_id)
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
      
    }else if(user.role_id == 1){
      this.subscription = this.adService.getStadisticsAds()
      .subscribe({
        next: (data: any) => {
          this.adService.ads = data;
          this.adsFG.controls['ads'].setValue(this.adService.ads[0].ad_id)
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
    }
  }
}
