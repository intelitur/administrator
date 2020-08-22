import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/general-services/auth.service';
import { AdsService } from '../../services/ads.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';
import { UserService } from 'src/app/users/services/user.service';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';

@Component({
  selector: 'app-ads-stadistics',
  templateUrl: './ads-stadistics.component.html',
  styleUrls: ['./ads-stadistics.component.scss']
})
export class AdsStadisticsComponent implements OnInit {

  private subscription: Subscription;

  constructor(
    public authService: AuthService,
    public commonService: CommonService,
    public adService: AdsService,
    public companyUsersService: CompanyUsersService
  ) { }

  ngOnInit() {
    this.obtainAllEvents()
  }

  async obtainAllEvents(){
    let user = this.authService.getUser()
    if(user.role_id == 2){

      this.subscription = this.adService.getStadisticsAds(user.user_id)
      .subscribe({
        next: (data: any) => {
          this.adService.ads = data;
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
      
    }else if(user.role_id == 1){
      this.subscription = this.adService.getStadisticsAds()
      .subscribe({
        next: (data: any) => {
          this.adService.ads = data;
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      });
    }
  }
}
