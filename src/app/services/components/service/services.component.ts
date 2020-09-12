import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ServiceCreateComponent } from '../service/service-create/service-create.component';

@Component({
  selector: 'app-services-dashboard',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class Services_ServicesComponent implements OnInit {

  constructor( public dialogService: MatDialog) { }

  ngOnInit() {
  }

  openCreateServiceDialog() {
    const dialog = this.dialogService.open(ServiceCreateComponent, {width: "60%", minWidth: "280px", disableClose: true})
    dialog.afterClosed().subscribe( data =>{
      console.log(data)
    })
  }

}
