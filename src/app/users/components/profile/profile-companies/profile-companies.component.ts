import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/company/models/Company';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-profile-companies',
  templateUrl: './profile-companies.component.html',
  styleUrls: ['./profile-companies.component.scss']
})
export class ProfileCompaniesComponent implements OnInit {

  user: any

  userCompanies: any[]

  filter = {
    input: "",
    filter: ({name}: any) => name.toLowerCase().indexOf(this.filter.input.toLowerCase()) > -1
  }

  constructor(
    private companyUsersService: CompanyUsersService,
    private commonService: CommonService,
    private sessionService: UserService
  ) { }

  ngOnInit() {
    this.user = this.sessionService.actualUser
    this.refresh()
  }

  refresh(){
    this.companyUsersService.getUserCompanies(this.user.user_id).subscribe(
      (data: any) => {
        this.userCompanies = data
        console.log(this.userCompanies)
      }
    )
  }

  deleteUserFromCompany(company: any){
    this.companyUsersService.deleteUserFromCompany(company).subscribe(
      {
        next: (data: any) => {
          if (data.status == 204) {
            this.refresh()
              this.commonService.openSnackBar(
                `Se le ha desasociado de la empresa ${company.name}`,
                "OK"
              );
          } else {
            this.commonService.openSnackBar(
              `Error al desasociar el usuario: ${data.error}`,
              "OK"
            );
          }

        },
        error: (err: HttpErrorResponse) => {
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        }
      }
    )
  }

}
