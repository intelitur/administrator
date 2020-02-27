import { Component, OnInit, Input, ɵɵcontainerRefreshEnd } from '@angular/core';
import { Company } from 'src/app/company/models/Company';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.scss']
})
export class CompanyUsersComponent implements OnInit {

  @Input() company: Company

  companyUsers: any[]

  filter = {
    input: "",
    filter: ({name, lastName}: any) => (name.toLowerCase() + ' ' + lastName.toLowerCase()).indexOf(this.filter.input.toLowerCase()) > -1
  }

  constructor(
    private companyUsersService: CompanyUsersService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.refresh()
  }

  refresh(){
    this.companyUsersService.getCompanyUsers(this.company.company_id).subscribe(
      (data: any) => {
        this.companyUsers = data
      }
    )
  }

  deleteUserFromCompany(user: any){
    this.companyUsersService.deleteUserFromCompany(user).subscribe(
      {
        next: (data: any) => {
          if (data.status == 204) {
            this.refresh()
              this.commonService.openSnackBar(
                `Se ha desasociado el usuario ${user.name} de la empresa ${this.company.name}`,
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
