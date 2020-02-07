import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/company/models/Company';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/general-services/common.service';

@Component({
  selector: 'app-company-requests',
  templateUrl: './company-requests.component.html',
  styleUrls: ['./company-requests.component.scss']
})
export class CompanyRequestsComponent implements OnInit {

  @Input() company: Company

  companyRequests: any[]

  filter = {
    input: "",
    filter: ({user_info}: any) => (user_info.name.toLowerCase() + ' ' + user_info.lastName.toLowerCase()).indexOf(this.filter.input.toLowerCase()) > -1
  }
  
  
  constructor(
    private companyUsersService: CompanyUsersService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.refreshRequests();
  }

  refreshRequests(){
    this.companyUsersService.getCompanyRequests(this.company.company_id, 1).subscribe(
      (data: any) => {
        this.companyRequests = data
        console.log(this.companyRequests)
      }
    )
  }

  dateString = (text: string) => text.split("T")[0]
  
  timeString = (text: string) => text.split("T")[1].slice(0, 5)

  allowUnion = (request: any) => this.updateRequestState(request, 2)

  denyUnion = (request: any) => this.updateRequestState(request, 3)



  updateRequestState(request: any, state: number){
    this.companyUsersService.updateRequesState(request, state).subscribe(
      {
        next: (data: any) => {
          if (data.status == 204) {
            request.state = state
            this.refreshRequests()
            if (state == 2)
              this.commonService.openSnackBar(
                `La solicitud de ${request.user_info.name} ha sido aceptada`,
                "OK"
              );
            else
              this.commonService.openSnackBar(
                `La solicitud de ${request.user_info.name} ha sido rechazada`,
                "OK"
              );


          } else {
            this.commonService.openSnackBar(
              `Error al cambiar el estado: ${data.error}`,
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
