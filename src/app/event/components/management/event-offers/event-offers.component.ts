import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EventType } from 'src/app/event/models/Event';
import { CommonService } from 'src/app/general-services/common.service';
import { AddEventOffersComponent } from '../add-event-offers/add-event-offers.component';

@Component({
  selector: 'app-event-offers',
  templateUrl: './event-offers.component.html',
  styleUrls: ['./event-offers.component.scss']
})
export class EventOffersComponent implements OnInit {

  @Input() myEvent: EventType;
  filter: any = {
    name: ""
  };
  constructor(
    public offersService: CommonService,//Cambiar
    public dialogService: MatDialog,
  ) { }

  ngOnInit() {
    this.obtainAllEventOffers()
  }

  obtainAllEventOffers(){

  }

  openAddOfferDialog(){
    this.dialogService.open(AddEventOffersComponent, {width: "50%", minWidth: "280px", disableClose: true})
  }

  deleteEventOffer(){

  }
}
