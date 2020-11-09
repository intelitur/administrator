import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { EventType } from 'src/app/event/models/Event';
import { EventService } from 'src/app/event/services/event.service';
import { CommonService } from 'src/app/general-services/common.service';
import { OfferService } from 'src/app/offers/services/offer.service';
import { AddEventOffersComponent } from '../add-event-offers/add-event-offers.component';

@Component({
  selector: 'app-event-offers',
  templateUrl: './event-offers.component.html',
  styleUrls: ['./event-offers.component.scss']
})
export class EventOffersComponent implements OnInit {

  @Input() myEvent: EventType;
  filter: any = {
    info: {
      name: ""
    }
  };
  subscription: Subscription

  constructor(
    public offersService: OfferService,
    public dialogService: MatDialog,
    public eventService: EventService,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.getEventOffers();
  }

  getEventOffers(){
    this.subscription =  this.eventService.getEventOffers(this.myEvent[0].event_id).subscribe({
      next: (data: any) => {
        this.offersService.offers = data;
      }, error: (err: HttpErrorResponse) => this.commonService.openSnackBar(`Error: ${err}`, "OK")
    });
  }

  openAddOfferDialog(){
    this.dialogService.open(AddEventOffersComponent, {
      width: "50%", 
      minWidth: "280px", 
      disableClose: true,  
      data: {
        event_id: this.myEvent[0].event_id
      }
    }).afterClosed().toPromise().then(
      () => {
        this.getEventOffers();
      }
    )
  }

  deleteEventOffer(offer){
    this.eventService.deleteOfferFromEvent(this.myEvent[0].event_id, offer.offer_id).subscribe({
      next: (data: any) => {
        if(data.status == 200) {
          this.commonService.openSnackBar("La oferta fue eliminada del evento", "Ok");
          this.eventService.getEventOffers(this.myEvent[0].event_id).subscribe({
            next: (data: any) => {
              this.offersService.offers = data;
            }
          });
        }
      }
    })
  }
}
