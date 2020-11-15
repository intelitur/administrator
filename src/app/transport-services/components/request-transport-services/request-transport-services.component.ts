import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/general-services/auth.service';
import { CommonService } from 'src/app/general-services/common.service';
import { TransportService } from '../../models/transport-service';
import { TransportServicesService } from '../../services/transport-services.service';

@Component({
  selector: 'app-request-transport-services',
  templateUrl: './request-transport-services.component.html',
  styleUrls: ['./request-transport-services.component.scss']
})
export class RequestTransportServicesComponent implements OnInit {

  filter: any = {
    name: ''
  }
  subscription: Subscription;
  request: any = [];

  constructor(
    public transportService: TransportServicesService,
    public authService: AuthService,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    //this.getTransportSerivicesRequest()
  }

  getTransportSerivicesRequest(){
    let user_id;
    user_id = this.authService.getUser().role_id != 1? user_id = this.authService.getUser().role_id: null;

    if(user_id == undefined){
      this.subscription = this.transportService.getTransportServices().subscribe({
        next: (data: any) => {
          this.transportService.transportServices = data;
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      })
    }else{
      this.subscription = this.transportService.getTransportServices(user_id).subscribe({
        next: (data: any) => {
          this.transportService.transportServices = data;
          this.subscription.unsubscribe();
        }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
      })
    }
  }

  changeStateRequest(ts: TransportService, state: Number){
    let msg;
    msg = state == 1? "aceptado." : "rechazado.";
    this.transportService.changeRequestState(ts.transport_id, state).subscribe({
      next: (data: any) => {
        data.status == 201? this.getTransportSerivicesRequest() : null
        data.status == 201? this.commonService.openSnackBar(`El evento ha sido ${msg}`,"OK") : null
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }
}
