import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/general-services/auth.service';
import { CommonService } from 'src/app/general-services/common.service';
import { TransportService } from '../../models/transport-service';
import { TransportServicesService } from '../../services/transport-services.service';
import { CreateTransportServicesComponent } from '../create-transport-services/create-transport-services.component';

@Component({
  selector: 'app-all-transport-services',
  templateUrl: './all-transport-services.component.html',
  styleUrls: ['./all-transport-services.component.scss']
})
export class AllTransportServicesComponent implements OnInit {

  filter: any = {
    name: ''
  }
  subscription: Subscription

  constructor(
    public transportService: TransportServicesService,
    public authService: AuthService,
    public commonService: CommonService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    //this.getTransportServices()
  }


  getTransportServices(){

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

  openCreateDialog(){
    this.matDialog.open(CreateTransportServicesComponent, {height:"75%", width: "65%", minWidth: "280px", disableClose: true})
  }

  changeState(ts: TransportService, { source }: any) {
    this.commonService
      .confirmationDialog(`¿Desea eliminar el servicio de transporte: ${ts.name}?`)
      .then(async (result) => {
        if (result) {
          this.transportService.changeTransportServiceState(ts).subscribe({
            next: (data: any) => {
              if (data.status == 201) {
                ts.is_active = !ts.is_active;
                source.checked = ts.is_active;
                this.commonService.openSnackBar(
                  `El evento ${ts.name} ha sido eliminado`,
                  "OK"
                );
                this.getTransportServices()
              } else {
                this.commonService.openSnackBar(
                  `Error al cambiar el estado: ${data.error}`,
                  "OK"
                );
              }
            },
            error: (err: HttpErrorResponse) => {
              this.commonService.openSnackBar(`Error: ${err.message}`, "OK");
              source.checked = ts.is_active;
            },
          });
        } else {
          source.checked = ts.is_active;
        }
      });
  }
}
