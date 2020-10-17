import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { OfferCreateComponent } from '../offer/offer-create/offer-create.component';
import { OffersTableComponent } from '../offer/offers-table/offers-table.component';

@Component({
  selector: 'app-offers-dashboard',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class Offers_ServicesComponent implements OnInit {
  @ViewChild('datosOffersTable', { static: false }) datosDesdeElPadre: OffersTableComponent;
  constructor( public dialogService: MatDialog) { }

  ngOnInit() {
  }
  /**
   * open dialog that create new offers
   */
  openCreateOfferDialog() {
    const dialog = this.dialogService.open(OfferCreateComponent, {width: "60%", minWidth: "280px", disableClose: true})
    dialog.afterClosed().subscribe( data =>{
      if(data.status == 201){
        this.datosDesdeElPadre.active = false;
      }
    })
  }
  
}
