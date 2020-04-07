import { Component, OnInit } from '@angular/core';
import { CompanyUsersService } from '../../services/company-users.service';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  filter = {
    state: '',
    name: '',
    filter: (request: any) => 
    (request.user_info.name + ' ' + request.user_info.lastName + " " + request.company_info.name)
    .toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1
  }

  loading = false;

  dateString = (datetime: string) => (new Date(datetime.slice(0, 10))).toLocaleDateString()
  timeString = (datetime: string) => datetime.slice(11, 16)

  constructor(
    public companyUsersService: CompanyUsersService,
    public commonService: CommonService,
    ) {
      this.refresh = this.refresh.bind(this)
     }

  ngOnInit() {
    this.refresh()
  }


  refresh(){
    this.loading = true;
    this.companyUsersService.getRequests(this.filter.state).subscribe(
      (data: any[]) => {
        this.companyUsersService.requests = data;
        this.loading = false;
    })
  }

  allowUnion = (request: any) => this.updateRequestState(request, 2)

  denyUnion = (request: any) => this.updateRequestState(request, 3)



  updateRequestState(request: any, state: number){
    this.loading = true;
    this.companyUsersService.updateRequesState(request, state).subscribe(
      {
        next: (data: any) => {
          this.loading = false;
          if (data.status == 204) {
            request.state = state
            this.refresh()
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
          this.loading = false;
        }
      }
    )
  }

}
