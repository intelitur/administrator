import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { CompanyService } from 'src/app/company/services/company.service';
import { MatDialog } from '@angular/material';
import { PetitionsFilterComponent } from './petitions-filter/petitions-filter.component';
import { AddEventRequestComponent } from '../add-event-request/add-event-request.component';

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
  currentCompanyId = undefined;
  currentCompanyName;
  loading: boolean = false;

  filter = {
    name: '',
    state: '0',
    filter: (request) => request.event_info.info.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
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
    this.refresh()
  }

  refresh(){
    this.loading = true;
    let state = Number(this.filter.state)
    state == 0? state = -1 : state = Number(this.filter.state)

    if(this.currentCompanyId == undefined && state == -1){
      this.currentCompanyId = -1;
      this.isFilters = false
    }
    state != -1? this.isFilters = true : null;
    
    this.subscription = this.companyService.getCompanyEventRequests(this.user.user_id, this.currentCompanyId, state).subscribe({
      next: (data: any) => {
        this.userRequest = data
        this.subscription.unsubscribe();
        this.loading = false;
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  refreshAll(){
    this.filter.state = '0'
    this.currentCompanyId = undefined;
    this.currentCompanyName = undefined;
    this.refresh()
  }

  openShowFilterOptionsDialog(){
    const  dialog = this.dialogService.open(PetitionsFilterComponent, {width: "50", minWidth: "280px", disableClose: true})

    dialog.afterClosed().subscribe( company => {
      if(company != undefined){
        this.currentCompanyId = company.company_id;
        this.currentCompanyName = company.name;
        this.isFilters = true
        this.refresh()
      }
    })
  }

  showEventDetails(_action: boolean, _event?: any){
    this.dialogService.open(AddEventRequestComponent, {height:"95%", width: "80%", minWidth: "280px", disableClose: true, data: { action : _action, event: _event, petition: true}})
  }

}


