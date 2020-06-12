import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { CompanyService } from 'src/app/company/services/company.service';

@Component({
  selector: 'app-union-event-request',
  templateUrl: './union-event-request.component.html',
  styleUrls: ['./union-event-request.component.scss']
})
export class UnionEventRequestComponent implements OnInit {

  companies: any;
  subscription: Subscription;
  user: any
  userRequest: any[] = [];
  currentCompany = null;

  filter = {
    name: "",
  }

  constructor(
    public userService: UserService,
    public companyUserService: CompanyUsersService,
    public commonService: CommonService,
    public companyService: CompanyService
  ) { }

  async ngOnInit() {

    this.user = this.userService.actualUser
    console.log(this.user)

    
    await this.companyUserService.getUserCompanies(this.user.user_id).toPromise().then(data => {
        console.log(data)
        this.companies = data
        this.currentCompany = this.companies[0].company_id
      }     
    )
    
    this.refresh()
  }

  refresh(){
    if(this.companies){
      this.subscription = this.companyService.getCompanyEventRequests(this.currentCompany).subscribe({
        next: (data: any) => {
          this.userRequest = data
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      })
    }
  }
}
