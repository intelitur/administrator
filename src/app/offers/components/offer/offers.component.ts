import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { OfferCreateComponent } from '../offer/offer-create/offer-create.component';

@Component({
  selector: 'app-offers-dashboard',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class Offers_ServicesComponent implements OnInit {

  constructor( public dialogService: MatDialog) { }

  ngOnInit() {
  }

  openCreateOfferDialog() {
    const dialog = this.dialogService.open(OfferCreateComponent, {width: "60%", minWidth: "280px", disableClose: true})
    dialog.afterClosed().subscribe( data =>{
      console.log(data)
    })
  }
  
}
