import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { CompanyService } from 'src/app/company/services/company.service';
import { MatDialog } from '@angular/material';
import { PetitionsFilterComponent } from './petitions-filter/petitions-filter.component';

@Component({
  selector: 'app-union-event-request',
  templateUrl: './union-event-request.component.html',
  styleUrls: ['./union-event-request.component.scss']
})
export class UnionEventRequestComponent implements OnInit {

  subscription: Subscription;
  user: any
  userRequest: any[] = [];
  isFilters: boolean = false;
  currentCompany;

  filter = {
    name: "",
    state: '0',
    filter: (request) => request.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
  }

  constructor(
    public userService: UserService,
    public companyUserService: CompanyUsersService,
    public commonService: CommonService,
    public companyService: CompanyService,
    public dialogService: MatDialog,
  ) { }

  async ngOnInit() {

    this.user = this.userService.actualUser
    console.log(this.user)
    this.refresh()
  }

  refresh(company_id?){

    let state = Number(this.filter.state)
    state == 0? state = -1 : state = Number(this.filter.state)

    if(company_id == null && state == -1){
      this.isFilters = false
    }
    state != -1? this.isFilters = true : null;
    
    this.subscription = this.companyService.getCompanyEventRequests(this.user.user_id, company_id, state).subscribe({
      next: (data: any) => {
        this.userRequest = data
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  refreshAll(){
    this.filter.state = '0'
    this.refresh()
  }

  openShowFilterOptionsDialog(){
    const  dialog = this.dialogService.open(PetitionsFilterComponent, {width: "50", minWidth: "280px", disableClose: true})

    dialog.afterClosed().subscribe( company_id => {
      if(company_id != undefined){
        this.isFilters = true
        this.currentCompany = company_id
        this.refresh(company_id)
      }
    })
  }
}


