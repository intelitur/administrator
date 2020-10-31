import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/general-services/common.service';
import { TouristRoute } from '../../models/tourist-route';
import { TouristRoutesService } from '../../services/tourist-routes.service';
import { CreateTouristRoutesComponent } from '../create-tourist-routes/create-tourist-routes.component';

@Component({
  selector: 'app-all-tourist-routes',
  templateUrl: './all-tourist-routes.component.html',
  styleUrls: ['./all-tourist-routes.component.scss']
})
export class AllTouristRoutesComponent implements OnInit {

  filter: any = {
    name: ""
  };
  subscription: Subscription

  constructor(
    public turistRoutesService: TouristRoutesService,
    public commonService: CommonService,
    public dialogService: MatDialog,
  ) { }

  ngOnInit() {
    this.getActiveTR();
  }

  getActiveTR(){
    this.subscription = this.turistRoutesService.getTouristRoutes(true).subscribe({
      next: (data: any) => {
        this.turistRoutesService.touristRoutes = data;
        this.subscription.unsubscribe();
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    })
  }

  openCreateDialog(){
    this.dialogService.open(CreateTouristRoutesComponent, {width: "60%", height:"70%", minWidth: "280px", disableClose: true})
  }

  changeState(touristRoute: TouristRoute, {source}: any){
  
    this.turistRoutesService.changeTouristRouteState(touristRoute.route_id).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          touristRoute.is_active = !touristRoute.is_active;
          source.checked = touristRoute.is_active
          this.commonService.openSnackBar(
            `La ruta turística ${touristRoute.name} ha sido desactivada`,
            "OK"
          );
          this.getActiveTR();
        } else {
          this.commonService.openSnackBar(
            `Error al cambiar el estado: ${data.error}`,
            "OK"
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
        source.checked = touristRoute.is_active
      }
    });
  }
}
