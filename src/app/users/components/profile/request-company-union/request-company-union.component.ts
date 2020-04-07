import { Component, OnInit } from '@angular/core';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { UserService } from 'src/app/users/services/user.service';
import { MatDialog } from '@angular/material';
import { AddRequestCompanyUnionComponent } from '../add-request-company-union/add-request-company-union.component';

@Component({
  selector: 'app-request-company-union',
  templateUrl: './request-company-union.component.html',
  styleUrls: ['./request-company-union.component.scss']
})
export class RequestCompanyUnionComponent implements OnInit {

  filter = {
    name: '',
    state: '',
    filter: (request) => request.company_info.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
  }

  loading = true;

  userRequests: any[]

  dateString = (datetime: string) => (new Date(datetime.slice(0, 10))).toLocaleDateString()
  timeString = (datetime: string) => datetime.slice(11, 16)


  refresh(){
    this.loading = true;
    this.companyUserService.getUserRequests(this.userService.actualUser.user_id, Number(this.filter.state)).subscribe((data: any) =>{
      console.log(data)
      this.userRequests = data;
      this.loading = false;
    })
  }



  constructor(
    private companyUserService: CompanyUsersService,
    private userService: UserService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.refresh()
  }

  deleteRequest(user_company_id){

  }

  addRequestUnion(){
    this.matDialog.open(AddRequestCompanyUnionComponent, {width: '500px', data: this.userService.actualUser})
  }

}
