import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ServiceCreateComponent } from '../service/service-create/service-create.component';
import { ServicesTableComponent } from "./services-table/services-table.component";
@Component({
  selector: 'app-services-dashboard',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class Services_ServicesComponent implements OnInit {
  @ViewChild('datosDesdeElPadre', { static: false }) datosDesdeElPadre: ServicesTableComponent;
  constructor( public dialogService: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openCreateServiceDialog() {
    const dialog = this.dialogService.open(ServiceCreateComponent, {width: "60%", minWidth: "280px", disableClose: true})
    dialog.afterClosed().subscribe( data =>{
      if(data.status == 201){
        this.datosDesdeElPadre.active = false;
      }
    })
  }


}
